import React from 'react';
import { object } from 'prop-types';
import { renderRoutes } from 'funsee/utils';

import Layout from '../../components/layout';

const App = (props) => {
  const { history: { push }, route } = props;
  return (
    <div>
      <Layout
        navTo={push}
      >
        {/* child routes won't render without this */}
        {renderRoutes(route.routes)}
      </Layout>
    </div>
  );
};

App.propTypes = {
  route: object.isRequired,
  history: object.isRequired
};

export default App;
