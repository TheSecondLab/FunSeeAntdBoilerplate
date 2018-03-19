import React from 'react';
import { bool, string, func, number } from 'prop-types';
import { Menu, Icon, Dropdown, Avatar } from 'antd';
// import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';
import * as style from './header.scss';


const Header = (props) => {
  const {
    isFold, userName
  } = props;
  const menu = (
    <Menu className={style.menu} selectedKeys={[]} >
      <Menu.Item disabled={true}><Icon type='user' />个人中心</Menu.Item>
      <Menu.Item disabled={true}><Icon type='setting' />设置</Menu.Item>
      <Menu.Divider />
      <Menu.Item key='logout'><a href='/'><Icon type='logout' />退出登录</a></Menu.Item>
    </Menu>
  );

  return (
    <article className={style.content}>
      <Icon
        className={style.trigger}
        type={isFold ? 'menu-unfold' : 'menu-fold'}
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
  userName: string.isRequired
};

export default Header;
