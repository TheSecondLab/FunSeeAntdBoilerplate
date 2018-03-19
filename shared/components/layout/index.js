import React, { Component as C } from 'react';

import { MenuNav, Header, BreadCrumbNav } from '../../components';
import * as style from './layout.scss';
import './reset.scss';

class Layout extends C {
  constructor() {
    super();
  }

  render() {
    return (
      <section className={style.wrapper}>
        <nav className={style.menu}>
          <div className={style.logo}>CARE</div>
          <MenuNav />
        </nav>
        <section className={style.content}>
          <Header userName='xing' isFold={true} />
          <BreadCrumbNav />
          <div className={style.childenContent}>{this.props.children}</div>
        </section>
      </section>
    );
  }
}

export default Layout;
