// const baseUrl = "https://localhost:5001/api/app/"
// const sysUrl = "https://localhost:5001/api/sys/"
var deng = require('./configdxy.js')
var zhu = require('./configzpy.js')
const imgurl = "http://192.168.1.232:3000/work-boot/" 
const viewUrl = imgurl+ 'sys/common/view/'
const Uploadurl = imgurl + 'sys/common/upload'
const Uploadurl2 = imgurl + 'sys/common/upload2'

// const imgurl = "http://localhost:5001"
// const baseUrl = imgurl + "/api/wx/"
// 获取用户openid
// const GetwxLogin = baseUrl + "wxlogin/GetLogin"
module.exports = {
	// GetwxLogin: GetwxLogin,
	imgurl: imgurl,
	deng: deng,
	zhu: zhu,
	viewUrl: viewUrl, // 图片路径
	uploadurl:Uploadurl,	// 上传路径
	uploadurl2:Uploadurl2 
};
