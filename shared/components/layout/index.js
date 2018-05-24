import React, { Component as C } from 'react';
import connect from 'funsee/connect';
import { MenuNav, Header, BreadCrumbNav } from '../../components';
import * as style from './layout.scss';
import { menuToggle } from '../../common/action';
import './reset.scss';

class Layout extends C {
  render() {
    const {
      isFold
    } = this.props;

    return (
      <section className={style.wrapper}>
        <nav className={isFold ? style.foldedMenu : style.unfoldedMenu} style={{ transition: 'width .3s' }}>
          <div className={isFold ? style.foldedLogo : style.unfoledLogo}>CARE</div>
          <MenuNav
            isFold={isFold}
          />
        </nav>
        <section className={style.content}>
          <Header userName='xing' isFold={isFold} menuToggle={this.props.menuToggle} />
          <BreadCrumbNav />
          <div className={style.childenContent}>{this.props.children}</div>
        </section>
      </section>
    );
  }
}
export default connect(
  (state) => {
    const {
      common: {
        isFold
      }
    } = state;

    return ({
      isFold
    });
  },
  {
    menuToggle
  }
)(Layout);
