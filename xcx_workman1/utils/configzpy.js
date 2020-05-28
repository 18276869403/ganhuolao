var api = require('./config.js')
//const baseUrl = "http://192.168.1.242:8081/work-boot/"
const baseUrl = "http://192.168.1.254:3000/work-boot/"
// 需求列表
// const xqurl = baseUrl + "work/yneed/list"
// 大厅最新需求
const zuixinxq = baseUrl + "pc/hall/yneedList" 
// 推荐商品
const tjsp = baseUrl + "pc/hall/userGoodPage"
// 工人晒晒
const CasePage = baseUrl + "pc/hall/casePage"
// 需求详情
const needSignPage = baseUrl + "pc/hall/needSignPage"
// 需求删除
const delYneedAndNeedSign = baseUrl + "pc/hall/delYneedAndNeedSign"
// 需求完成
const needUpdateStateById = baseUrl + "pc/hall/needUpdateStateById"
module.exports = {
  CasePage:CasePage,
  //xqurl:xqurl,
  zuixinxq:zuixinxq,
  needSignPage:needSignPage,
  delYneedAndNeedSign:delYneedAndNeedSign,
  needUpdateStateById:needUpdateStateById,
  tjsp:tjsp
};