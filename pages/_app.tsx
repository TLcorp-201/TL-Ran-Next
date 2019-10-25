import 'moment/locale/vi';
import 'antd/dist/antd.less';

import { Provider } from 'react-redux';
import { Store } from 'redux';
import App, { Container, AppContext } from 'next/app';
import React from 'react';
import moment from 'moment';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { ApplicationState } from '@/typings.d';

import { appWithTranslation, i18n } from '@/libraries/i18n';
import configStore from '@/libraries/store/configStore';

if (process.env.NODE_ENV !== 'production' && process.browser) {
  const { registerObserver } = require('react-perf-devtool'); // eslint-disable-line
  registerObserver();
}

// Simple, no?
/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is
 * a server side or client side
 * @param {Request} options.req NodeJS Request object
 * (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object
 * (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key CONFIGe used to
 * preserve store in global namespace for safe HMR
 */
const makeStore = (initialState: ApplicationState) => configStore(initialState);

class MyApp extends App<{ store: Store<ApplicationState> }> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    moment.locale(i18n.language);
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore, { debug: true })(
  appWithTranslation(withReduxSaga(MyApp)),
);
