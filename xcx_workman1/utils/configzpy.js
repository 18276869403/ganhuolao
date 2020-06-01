var api = require('./config.js')
//const baseUrl = "http://192.168.1.242:8081/work-boot/"
const baseUrl = "http://192.168.1.249:3000/work-boot/"
// 需求列表
// const xqurl = baseUrl + "work/yneed/list"
// 大厅最新需求
const zuixinxq = baseUrl + "pc/hall/yneedList" 
// 推荐商品-我的商品
const tjsp = baseUrl + "pc/hall/userGoodPage"
// 工人晒晒
const CasePage = baseUrl + "pc/hall/casePage"
// 需求详情
const needSignPage = baseUrl + "pc/hall/needSignPage"
// 需求删除
const delYneedAndNeedSign = baseUrl + "pc/hall/delYneedAndNeedSign"
// 需求完成
const needUpdateStateById = baseUrl + "pc/hall/needUpdateStateById"
// 我的留言
const pcQueryMessagePageByUserID = baseUrl + "pc/user/pcQueryMessagePageByUserId"
// 删除留言
const deleteMessage = baseUrl + "pc/user/deleteMessage"
// 删除我的商品
const deleteUserGood = baseUrl + "pc/user/deleteUserGood"
// 添加商品
const addUserGood = baseUrl + "pc/hall/addUserGood"
// 修改商品
const editUserGood = baseUrl + "pc/user/editUserGood"
// 我的推荐
const pcQueryUserPointPage = baseUrl + "pc/user/pcQueryUserPointPage"
// 发布晒晒
const insertCase = baseUrl + "pc/user/insertCase"
// 晒晒详情
const pcQueryWxCaseById = baseUrl + "pc/user/pcQueryWxCaseById"
module.exports = {
  CasePage:CasePage,
  //xqurl:xqurl,
  zuixinxq:zuixinxq,
  needSignPage:needSignPage,
  delYneedAndNeedSign:delYneedAndNeedSign,
  needUpdateStateById:needUpdateStateById,
  tjsp:tjsp,
  editUserGood:editUserGood,
  addUserGood:addUserGood,
  pcQueryUserPointPage:pcQueryUserPointPage,
  deleteUserGood:deleteUserGood,
  deleteMessage:deleteMessage,
  pcQueryMessagePageByUserID:pcQueryMessagePageByUserID,
  insertCase:insertCase,
  pcQueryWxCaseById:pcQueryWxCaseById
};