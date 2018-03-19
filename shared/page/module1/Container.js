import React, { Component as C } from 'react';
import connect from 'funsee/connect';
import { Button } from 'antd';
import * as actions from './action';
import * as commonAction from '../../common/action';

class Module1 extends C {
  static pageInit() {
    return () => actions.zxAction(123);
  }

  componentDidMount() {
    this.props.zxTest();
    this.props.loadEnv();
  }

  render() {
    const { props } = this;
    console.log(props);
    return (
      <div>
        hellow 1112223
        {props.test}
        <Button type='primary'>按钮</Button>
      </div>
    );
  }
}
Module1.pageTitle = '测试页面';

export default connect(state => ({
  test: state.module.module1.zxText
}), {
  zxTest: actions.zxAction,
  loadEnv: commonAction.loadEnv
})(Module1);
