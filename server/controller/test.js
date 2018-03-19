const test1 = (ctx) => {
  ctx.body = { value: '你真棒！' };
  ctx.status = 200;
};

module.exports = {
  test1
};
