import { FIELD_TYPE } from 'funsee-smart';

const querySchema = {
  columnCount: 4,
  rowCount: 2,
  fields: [{
    key: 'channelId',
    label: '渠道ID',
    placeholder: '请输入渠道ID',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'channelName',
    label: '渠道名称',
    placeholder: '请输入渠道名称',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'campaignDefId',
    label: '营销活动ID',
    placeholder: '请输入营销活动ID',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'campaignDefName',
    label: '营销活动名称',
    placeholder: '请输入营销活动名称',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'packageDefId',
    label: '产品组合ID',
    placeholder: '请输入产品组合ID',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'packageDefName',
    label: '产品组合名称',
    placeholder: '请输入产品组合名称',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'reportPolicyNo',
    label: '保单号',
    placeholder: '请输入保单号',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'packagePolicyNo',
    label: '团单号',
    placeholder: '请输入团单号',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'reportNo',
    label: '报案号',
    placeholder: '请输入报案号',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'channelApplicationId',
    label: '渠道订单号',
    placeholder: '请输入渠道订单号',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'policyholderName',
    label: '投保人',
    placeholder: '请输投保人',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'policyholderCertificateNo',
    label: '投保人证件号码',
    placeholder: '请输入投保人证件号码',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'insurantName',
    label: '被保险人',
    placeholder: '请输入被保险人',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'insurantCertificateNo',
    label: '被保险人证件号码',
    placeholder: '请输入被保险人证件号码',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'lossCause',
    label: '出险原因',
    placeholder: '请选择出险原因',
    type: FIELD_TYPE.SELECT
  }, {
    key: 'source',
    label: '案件来源',
    placeholder: '请选择案件来源',
    type: FIELD_TYPE.SELECT
  }, {
    key: 'taskClaimStatus',
    label: '案件状态',
    placeholder: '请选择案件状态',
    type: FIELD_TYPE.SELECT
  }, {
    key: 'reportDateFrom',
    label: '报案开始日期',
    placeholder: '请选择报案开始日期',
    type: FIELD_TYPE.DATEPICKER,
    showTime: true,
    format: 'YYYY-MM-DD HH:mm:ss'
  }, {
    key: 'reportDateTo',
    label: '报案结束日期',
    placeholder: '请选择报案结束日期',
    type: FIELD_TYPE.DATEPICKER,
    showTime: true,
    format: 'YYYY-MM-DD HH:mm:ss'
  }, {
    key: 'closeDateFrom',
    label: '结案开始日期',
    placeholder: '请选择结案开始日期',
    type: FIELD_TYPE.DATEPICKER,
    showTime: true,
    format: 'YYYY-MM-DD HH:mm:ss'
  }, {
    key: 'closeDateTo',
    label: '结案结束日期',
    placeholder: '请选择结案结束日期',
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
  primaryKey: 'code',
  columns: [{
    key: 'reportNo',
    title: '报案号'
  }, {
    key: 'taskClaimStatus',
    title: '案件状态'
  }, {
    key: 'reportPolicyNo',
    title: '保单号'
  }, {
    key: 'packagePolicyNo',
    title: '团单号'
  }, {
    key: 'policyholderName',
    title: '投保人'
  }, {
    key: 'insurantName',
    title: '被保险人'
  }, {
    key: 'channelName',
    title: '渠道'
  }, {
    key: 'campaignDefName',
    title: '营销活动'
  }, {
    key: 'packageDefName',
    title: '产品组合'
  }, {
    key: 'lossCauseName',
    title: '出险原因'
  }, {
    key: 'accidentDate',
    title: '出险日期'
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
    key: 'code', // 传递给后端的字段名
    label: '域名代码', // 前端显示的名称
    placeholder: '请输入域名代码',
    type: FIELD_TYPE.INPUT,
    span: 2
  }, {
    key: 'name',
    label: '域名名称',
    placeholder: '请输入域名名称，支持模糊查询',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'appName',
    label: '负责人',
    placeholder: '请输入负责人，支持模糊查询',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'url',
    label: '域名描述信息',
    placeholder: '请输入域名描述信息，支持模糊查询',
    type: FIELD_TYPE.INPUT
  }, {
    type: FIELD_TYPE.GROUP,
    title: 'group test',
    fields: [
      {
        key: 'group1',
        label: 'group1',
        placeholder: '请输入group1',
        type: FIELD_TYPE.INPUT
      },
      {
        key: 'group2',
        label: 'group2',
        placeholder: '请输入group2',
        type: FIELD_TYPE.INPUT
      }, {
        key: 'group3',
        label: 'group3',
        placeholder: '请输入group3',
        type: FIELD_TYPE.INPUT
      }, {
        key: 'group4',
        label: 'group4',
        placeholder: '请输入group4',
        type: FIELD_TYPE.INPUT
      }
    ]
  }, {
    key: 'appName1',
    label: '负责人1',
    placeholder: '请输入负责人，支持模糊查询',
    type: FIELD_TYPE.INPUT
  }, {
    key: 'url1',
    label: '域名描述信息1',
    placeholder: '请输入域名描述信息，支持模糊查询',
    type: FIELD_TYPE.INPUT
  }]
};

export default {
  querySchema,
  tableSchema,
  editSchema
};
