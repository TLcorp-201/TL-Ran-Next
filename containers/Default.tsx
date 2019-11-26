import * as React from 'react';
import { withRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import NetworkStatus from '../components/NetworkStatus';

const Default: React.FunctionComponent<{
  router?: any;
  title?: string;
}> = props => (
  <App>
    <Helmet>
      <title>
        {props.title && props.title !== ''
          ? `${props.title} :: RAN! React . GraphQL . Next.js Toolkit`
          : 'RAN! React . GraphQL . Next.js Toolkit'}
      </title>
    </Helmet>
    {props.children}
    <NetworkStatus />
  </App>
);

Default.defaultProps = {
  title: '',
};

export default withRouter(Default);
