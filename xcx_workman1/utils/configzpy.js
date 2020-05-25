var api = require('./config.js')
//const baseUrl = "http://192.168.1.242:8081/work-boot/"
const baseUrl = "http://192.168.1.237:8081/work-boot/"
// 需求列表
const xqurl = baseUrl + "work/yneed/list"
// 大厅最新需求
const zuixinxq = baseUrl + "pc/hall/yneedList"
// 推荐商品
const tjsp = baseUrl + "pc/hall/userGoodPage"
module.exports = {
  xqurl:xqurl,
  zuixinxq:zuixinxq,
  tjsp:tjsp
};