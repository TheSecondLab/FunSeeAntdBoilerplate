import React from 'react';
import { bool, string, func } from 'prop-types';
import { Menu, Icon, Dropdown, Avatar } from 'antd';

import * as style from './header.scss';


const Header = (props) => {
  const {
    isFold, userName, menuToggle
  } = props;
  const menu = (
    <Menu className={style.menu} selectedKeys={[]} >
      <Menu.Item disabled={true}><Icon type='user' />个人中心</Menu.Item>
      <Menu.Item disabled={true}><Icon type='setting' />设置</Menu.Item>
      <Menu.Divider />
      <Menu.Item key='logout'><a href='/api/common/logout'><Icon type='logout' />退出登录</a></Menu.Item>
    </Menu>
  );

  return (
    <article className={style.content}>
      <Icon
        className={style.trigger}
        type={isFold ? 'menu-unfold' : 'menu-fold'}
        onClick={menuToggle}
      />
      <div>
        {/* <NoticeIcon className={style.noticeIcon} count={15} /> */}
        <Dropdown overlay={menu}>
          <span className={`${style.action} ${style.account}`}>
            <Avatar size='small' className={style.avatar} src='https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG' />
            {userName}
          </span>
        </Dropdown>
      </div>

    </article>
  );
};


Header.propTypes = {
  isFold: bool.isRequired,
  userName: string,
  menuToggle: func.isRequired
};

Header.defaultProps = {
  userName: ''
};

export default Header;
