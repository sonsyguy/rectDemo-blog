import React, { PureComponent } from 'react';
import { PageHeader } from 'antd';
import Routers from '../../../config/config';

let { routes } = Routers;
// eslint-disable-next-line prefer-destructuring
routes = routes[0].routes;

class PageHeaderWrap extends PureComponent {
  render() {
    return (
      <PageHeader
        title=""
        breadcrumb={{ routes }}
        style={{ marginTop: '1px', paddingLeft: '30px' }}
      />
    );
  }
}

export default PageHeaderWrap;
