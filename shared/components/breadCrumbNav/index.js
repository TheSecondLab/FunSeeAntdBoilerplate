
import React, { Component as C } from 'react';
import { Breadcrumb, Icon } from 'antd';

import * as style from './style.scss';

class BreadCrumbNav extends C {
  render() {
    return (
      <section className={style.box}>
        <Breadcrumb>
          <Breadcrumb.Item href=''>
            <Icon type='home' />
          </Breadcrumb.Item>
          <Breadcrumb.Item href=''>
            <Icon type='user' />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
      Application
          </Breadcrumb.Item>
        </Breadcrumb>
      </section>
    );
  }
}

export default BreadCrumbNav;
