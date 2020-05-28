var api = require('./config.js')
const baseUrl = "http://192.168.1.254:3000/work-boot/"

// 2.0需要工人，商家分类表：可选2个分类-编辑
const WxUserAdd = baseUrl + "/pc/hall/wxUserAdd"
// 登录
const GetKeyInfo = baseUrl + "work/wxLogin/getKeyInfo"
// 图片上传
const Upload = baseUrl + "sys/common/upload"
// 获取广告列表
const Bannerlist = baseUrl + "pc/hall/list"
// 获取广告列表
const PointLIst = baseUrl + "pc/hall/pointList"
// 获取推荐工人/推荐商家
const WxUserPage = baseUrl + "pc/hall/wxUserPage"
// 入驻功能一级分类 
const OneClassList = baseUrl + "pc/hall/oneClassList"
// 入驻功能二级分类
const TwoClassList = baseUrl + "pc/hall/twoClassList"
// 晒晒
const CasePage = baseUrl + "pc/hall/casePage"
// 加载个人信息
const QueryWxUser = baseUrl + "pc/user/queryWxUser"

module.exports = {
  wxUserAdd: WxUserAdd,
  getKeyInfo:GetKeyInfo,
  upload:Upload,
  bannerlist:Bannerlist,
  pointList:PointLIst,
  wxUserPage:WxUserPage,
  oneClassList:OneClassList,
  casePage:CasePage ,
  twoClassList:TwoClassList,
  queryWxUser:QueryWxUser
};
