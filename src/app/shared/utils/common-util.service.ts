import { Injectable } from '@angular/core';

@Injectable()
export class CommonUtilsSrv{

  constructor(

  ){}

  /*任何元素到顶端的距离
  */
  getElementTop(elem){
    //获得当前elem的offsetTop，保存在变量sum中
    let sum=elem.offsetTop;
    while((elem=elem.offsetParent)!=null){
        //获得当前elem的offsetTop，累加到sum
        sum+=elem.offsetTop;
    }
    return sum;
  }

  /*根据name读取cookie
  */
  getCookie(name){
    let arr=document.cookie.replace(/\s/g,"").split(';');
    for(let i=0;i<arr.length;i++){
        let tempArr=arr[i].split('=');
        if(tempArr[0]==name){
            return decodeURIComponent(tempArr[1]);
        }
    }
    return '';
  }
  /*设置Cookie
  */
  setCookie(name,value,days){
    let date=new Date();
    date.setDate(date.getDate()+days);
    document.cookie=name+'='+value+';expires='+date;
  }
  /*设置Cookie
  */
  removeCookie(name){
    this.setCookie(name,'1',-1);
  }

  getExplore(){
    let sys: any = {},
        ua = navigator.userAgent.toLowerCase(),
        s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
    (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1]:
    (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1]:
    (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1]:
    (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1]:
    (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1]:
    (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1]: 0;
    // 根据关系进行判断
    if(sys.ie)return('IE: ' + sys.ie)
    if(sys.edge)return('EDGE: '+ sys.edge)
    if(sys.firefox) return('Firefox: '+ sys.firefox)
    if(sys.chrome) return('Chrome: '+ sys.chrome)
    if(sys.opera) return('Opera: ' + sys.opera)
    if(sys.safari) return('Safari: ' + sys.safari)
    return'Unkonwn'
  }

  getOS() {
    let userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    let vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
    let appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';
    if (/mac/i.test(appVersion)) return'MacOSX'
    if (/win/i.test(appVersion)) return'windows'
    if (/linux/i.test(appVersion))
    return'linux'
    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent))return 'ios'
    if (/android/i.test(userAgent)) return'android'
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return'windowsPhone'
  }

  //判断浏览器是否支持webP格式图片
  isSupportWebP() {
    return!![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }


  /*对象序列化
  */
  stringfyQueryString(obj) {
    if (!obj) return'';
    let pairs = [];
    for (let key in obj) {
        let value = obj[key];
        if (value instanceof Array) {
            for (let i = 0; i < value.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
            }
            continue;
        }
        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }
    return pairs.join('&');
  }

  /*url参数转对象
  */
  parseQueryString(url) {
    url = url == null ? window.location.href : url
    let search = url.substring(url.lastIndexOf('?') + 1)
    if (!search) {
        return{}
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}')
  }
}