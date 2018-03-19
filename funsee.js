// const {FunSee} = require('../FunSee');
const { FunSee } = require('funsee');

// const app = new FunSee();

module.exports = (config = {}, needInitialize = true) => (new FunSee(config, needInitialize));
