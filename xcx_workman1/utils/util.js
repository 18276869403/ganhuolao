const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const Ages = function(str){
  str = str.split(' ')[0]
    var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);    
    if(r==null)return false;    
      var d= new Date(r[1],   r[3]-1,   r[4]);    
      if (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4])  
      { 
        var Y = new Date().getFullYear();  
        return Y-r[1];  
      }  
    return("输入的日期格式错误！");  
}

module.exports = {
  formatTime: formatTime,
  ages:Ages
}
