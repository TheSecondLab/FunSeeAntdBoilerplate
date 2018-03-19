import React from 'react';
import { object, func } from 'prop-types';

import Layout from '../../components/layout';

const App = fn => ({ route }) => (
  <div>
    <Layout>
      {/* child routes won't render without this */}
      {fn(route.routes)}
    </Layout>
  </div>
);


App.propTypes = {
  route: object.isRequired,
  fn: func.isRequired
};

App.defaultProps = {
  route: {},
  fn: () => {}
};

export default App;
