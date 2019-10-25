const distDir = 'build';

let nextConfig = {
  distDir,
};

if (process.env.PHASE !== 'running') {
  // next.config.js
  /* eslint-disable global-require */
  const withCSS = require('@zeit/next-css');
  const withLess = require('@zeit/next-less');
  const withFont = require('next-fonts');
  const withImages = require('next-images');
  const withPlugins = require('next-compose-plugins');
  const path = require('path');
  const dotEnvResult = require('dotenv').config();

  const { IgnorePlugin } = require('webpack');

  const router = require('./server/routes');

  const internalNodeModulesRegExp = /\/swiper(?!.*node_modules)/;
  const externalNodeModulesRegExp = /node_modules(?!\/swiper(?!.*node_modules))/;

  const parsedVariables = dotEnvResult.parsed || {};
  const dotEnvVariables = {};
  // We always want to use the values from process.env, since dotenv
  // has already resolved these correctly in case of overrides
  Object.keys(parsedVariables).forEach(
    key => (dotEnvVariables[key] = process.env[key]),
  );

  const initExport = {
    env: {
      ...dotEnvVariables,
    },
    distDir,
    webpack: (_config, { dev, isServer, defaultLoaders }) => {
      const prod = !dev;
      const config = { ..._config };
      // config webpack to make babel transpiles some file in node_modules (swiper)
      config.resolve.symlinks = false;
      config.externals = (config.externals || []).map(external => {
        if (typeof external !== 'function') return external;
        return (ctx, req, cb) =>
          internalNodeModulesRegExp.test(req) ? cb() : external(ctx, req, cb);
      });

      config.module.rules.push({
        test: /\.+(js|jsx)$/,
        loader: defaultLoaders.babel,
        include: [internalNodeModulesRegExp],
      });
      // ////
      config.plugins = config.plugins.filter(plugin => {
        if (plugin.constructor.name === 'ForkTsCheckerWebpackPlugin') {
          return false;
        }
        return true;
      });

      config.resolve.alias['@'] = path.join(__dirname);
      config.plugins.push(new IgnorePlugin(/^\.\/locale$/, /moment$/));

      if (dev) {
        config.module.rules.push({
          test: /\.(jsx?|gql|graphql)$/,
          loader: 'eslint-loader',
          exclude: ['/node_modules/', '/.next/', '/helper_scripts/'],
          enforce: 'pre',
        });
      }

      if (process.env.ANALYZE_BUILD) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: isServer ? 8888 : 8889,
            openAnalyzer: true,
          }),
        );
      }

      if (prod && process.env.OFFLINE_SUPPORT) {
        const OfflinePlugin = require('offline-plugin');
        config.plugins.push(
          new OfflinePlugin({
            publicPath: '/',
            relativePaths: false,
            externals: ['/', '/manifest.html'],
            excludes: ['.htaccess'],
            safeToUseOptionalCaches: true,
            caches: 'all',
            rewrites: function rewrites(asset) {
              if (
                asset.indexOf('.hot-update.js') > -1 ||
                asset.indexOf('build-stats.json') > -1 ||
                asset === 'BUILD_ID' ||
                asset.indexOf('dist/') === 0
              ) {
                return null;
              }

              if (asset[0] === '/') {
                return asset;
              }

              if (asset.indexOf('bundles/pages/') === 0) {
                return `/_next/-/${asset
                  .replace('bundles/pages', 'page')
                  .replace('index.js', '')
                  .replace(/\.js$/, '')}`;
              }

              return `/_next/-/${asset}`;
            },
            autoUpdate: 1000 * 60 * 5,
            __tests: dev ? { ignoreRuntime: true } : {},
            ServiceWorker: {
              events: true,
              navigateFallbackURL: '/',
            },
            AppCache: {
              directory: './',
              events: true,
            },
          }),
        );
      }

      return config;
    },
    webpackDevMiddleware: config => {
      const newConfig = { ...config };
      const ignored = [
        newConfig.watchOptions.ignored[0],
        externalNodeModulesRegExp,
      ];
      newConfig.watchOptions.ignored = ignored;
      return newConfig;
    },
  };

  if (process.env.STATIC_EXPORT) {
    initExport.exportPathMap = function exportPathMap() {
      const routes = {};
      routes['/'] = {
        page: '/',
      };
      router.routes.forEach(route => {
        if (!route.pattern.includes(':')) {
          routes[route.pattern] = {
            page: route.page,
          };
        }
      });

      return routes;
    };
  }
  nextConfig = withPlugins(
    [
      [withCSS],
      [withLess, { lessLoaderOptions: { javascriptEnabled: true } }],
      [withFont],
      [withImages],
    ],
    initExport,
  );
}

module.exports = nextConfig;
