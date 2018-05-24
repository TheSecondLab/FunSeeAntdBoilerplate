import React from 'react';
import { Form, Col, Row, Button, Input, Table, Pagination, Card } from 'antd';

const FormItem = Form.Item;

const Module2 = () => (
  <div>
    <div>
    hellow M2 {global.test}222
    </div>
    <Form>
      <Row gutter={32}>
        <Col span={8} >
          <FormItem label='资源键'>
            <Input placeholder='请输入资源键' />
          </FormItem>
        </Col>
        <Col span={8} >
          <FormItem label='资源名称'>
            <Input placeholder='请输入资源名称' />
          </FormItem>
        </Col>
        <Col span={8} />
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type='primary' htmlType='submit'>查询</Button>
          <Button style={{ marginLeft: 8 }} >
                取消
          </Button>
        </Col>
      </Row>
    </Form>
    <Table />
    <Pagination />
    <Card title='Card title' extra={<a href='#'>More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>

  </div>
);
const _Module2 = Form.create()(Module2);

export default _Module2;
