import { FIELD_TYPE } from 'funsee-smart';

const querySchema = {
  columnCount: 4,
  rowCount: 2,
  fields: [{
    key: 'test1',
    label: '测试字段1',
    placeholder: '请输入测试字段1',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'test2',
    label: '测试字段2',
    placeholder: '请输入测试字段2',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'test3',
    label: '测试字段3',
    placeholder: '请输入测试字段3',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'test4',
    label: '测试字段4',
    placeholder: '请输入测试字段4',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'test5',
    label: '测试字段5',
    placeholder: '请输入测试字段5',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'test6',
    label: '测试字段6',
    placeholder: '请输入测试字段6',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'test7',
    label: '测试字段7',
    placeholder: '请输测试字段7',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'test8',
    label: '测试字段8',
    placeholder: '请输入测试字段8',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'test9',
    label: '测试字段9',
    placeholder: '请输入测试字段9',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'test10',
    label: '测试字段10',
    placeholder: '请选择开始日期',
    type: FIELD_TYPE.DATEPICKER,
    showTime: true,
    format: 'YYYY-MM-DD HH:mm:ss'
  }, {
    key: 'test11',
    label: '测试字段11',
    placeholder: '请选择结束日期',
    type: FIELD_TYPE.DATEPICKER,
    showTime: true,
    format: 'YYYY-MM-DD HH:mm:ss'
  }],
  buttons: [{
    text: '查询',
    type: 'primary',
    click: 'smartQuery',
    width: '4'
  }, {
    text: '清除',
    isReset: true,
    width: '4'
  }]
};

const tableSchema = {
  primaryKey: 'test1',
  columns: [{
    key: 'test1',
    title: '测试字段1'
  }, {
    key: 'test2',
    title: '测试字段2'
  }, {
    key: 'test3',
    title: '测试字段3'
  }, {
    key: 'test4',
    title: '测试字段4'
  }, {
    key: 'test5',
    title: '测试字段5'
  }, {
    key: 'test6',
    title: '测试字段6'
  }, {
    key: 'test7',
    title: '测试字段7'
  }, {
    key: 'test8',
    title: '测试字段8'
  }, {
    key: 'test9',
    title: '测试字段9'
  }, {
    key: 'test10',
    title: '测试字段10'
  }],
  toolbarButtons: [{
    text: '新增',
    type: 'primary',
    click: 'smartAdd'
  }],
  optionButtons: [{
    text: '查看',
    click: 'smartView'
  }, {
    text: '编辑',
    click: 'smartEdit',
    authKey: 'updateRecord'
  },
  {
    text: '复制',
    click: 'smartCopy',
    authKey: 'createRecord'
  },
  {
    text: '删除',
    click: 'smartDelete',
    authKey: 'deleteRecord'
  }]
};

const editSchema = {
  fields: [{
    key: 'test1', // 传递给后端的字段名
    label: '测试字段1', // 前端显示的名称
    placeholder: '请输入测试字段1',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'test2',
    label: '测试字段2',
    placeholder: '请输入测试字段2',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'test3',
    label: '测试字段3',
    placeholder: '请输入测试字段3',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'test4',
    label: '测试字段4',
    placeholder: '请输入测试字段4',
    type: FIELD_TYPE.INPUT,
    span: 3
  }, {
    type: FIELD_TYPE.GROUP,
    title: 'group分组字段类型',
    fields: [
      {
        key: 'test5',
        label: '测试字段5',
        placeholder: '请输入测试字段5',
        type: FIELD_TYPE.INPUT
      },
      {
        key: 'test6',
        label: '测试字段6',
        placeholder: '请输入测试字段6',
        type: FIELD_TYPE.INPUT
      }, {
        key: 'test7',
        label: '测试字段7',
        placeholder: '请输入测试字段7',
        type: FIELD_TYPE.INPUT
      }, {
        key: 'test8',
        label: '测试字段8',
        placeholder: '请输入测试字段8',
        type: FIELD_TYPE.INPUT
      }
    ]
  }, {
    key: 'test9',
    label: '测试字段9',
    placeholder: '请输入测试字段9',
    type: FIELD_TYPE.INPUT,
    span: 2
  }, {
    key: 'test10',
    label: '测试字段10',
    placeholder: '请输入测试字段10',
    type: FIELD_TYPE.INPUT
  }]
};

export default {
  querySchema,
  tableSchema,
  editSchema
};
