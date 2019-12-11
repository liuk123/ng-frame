import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeUtilSrv {

  constructor() { }


  //格式化${startTime}距现在的已过时间
  formatPassTime(startTime) {
    let currentTime = Date.parse(new Date() as any),
        time = currentTime - startTime,
        day = parseInt(time / (1000 * 60 * 60 * 24) as any),
        hour = parseInt(time / (1000 * 60 * 60) as any),
        min = parseInt(time / (1000 * 60) as any),
        month = parseInt(day / 30 as any),
        year = parseInt(month / 12 as any);
    if (year) return year + "年前"
    if (month) return month + "个月前"
    if (day) return day + "天前"
    if (hour) return hour + "小时前"
    if (min) return min + "分钟前"
    else return'刚刚'
  }
  //格式化现在距${endTime}的剩余时间
  formatRemainTime(endTime) {
    let startDate = new Date();
    //开始时间
    let endDate = new Date(endTime);
    //结束时间
    let t = endDate.getTime() - startDate.getTime();
    //时间差
    let d = 0,
        h = 0,
        m = 0,
        s = 0;
    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
    }
    return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
  }

  //最后一天
  getEndDate = function (month, year) {
    var thisDate = new Date();
    //设置日期为下个月的第一天
    thisDate.setFullYear(
        year || thisDate.getFullYear()
        , month || (thisDate.getMonth() + 1)
        , 1);
    //减去一天，得到当前月最后一天
    return new Date(thisDate.getTime() - 1000 * 60 * 60 * 24).getDate();
  };

  //拼接时间
  timeForMat = function  (hourCount,label) {
    hourCount = Math.floor(hourCount*100)/100;
    let nowTime = new Date()
    nowTime.setTime(nowTime.getTime())
    let Y1 = nowTime.getFullYear()
    let M1 = ((nowTime.getMonth() + 1) >= 10 ? (nowTime.getMonth() + 1) : '0' + (nowTime.getMonth() + 1))
    let D1 = (nowTime.getDate() >= 10 ? nowTime.getDate() : '0' + nowTime.getDate())
    let H1 = (nowTime.getHours() >= 10 ? nowTime.getHours() : '0' + nowTime.getHours())
    let Minuts1 =  (nowTime.getMinutes() >= 10 ? nowTime.getMinutes() : '0' + nowTime.getMinutes());
    let curTime = Y1 + '-' + M1 + '-' + D1 + ' ' + H1 + ':' +  Minuts1// 当前时间
    let timeRange = new Date()
    if(hourCount >= 24){
        timeRange.setTime(timeRange.getTime() - (60 * 60 * 1000 * hourCount))
    } else if(hourCount < 24) {
        timeRange.setTime(timeRange.getTime() - (60 * 60 * 1000 * hourCount))
    }

    let Y2 = timeRange.getFullYear()
    let M2 = ((timeRange.getMonth() + 1) > 10 ? (timeRange.getMonth() + 1) : '0' + (timeRange.getMonth() + 1))
    let D2 = (timeRange.getDate() >= 10 ? timeRange.getDate() : '0' + timeRange.getDate())
    let H2 = (timeRange.getHours() >= 10 ? timeRange.getHours() : '0' + timeRange.getHours())
    let Minuts2 =  (timeRange.getMinutes() >= 10 ? timeRange.getMinutes() : '0' + timeRange.getMinutes());
    let preTime = Y2 + '-' + M2 + '-' + D2 + ' ' + H2 + ':' +  Minuts2 // 之前的7天或者30天
    if(label === '今日') {
        preTime = Y2 + '-' + M2 + '-' + D2 + ' ' + H2 + ':' +  '00'// 当前时间
    }
    return {
        startTime: preTime,
        endTime: curTime
    }
  }
  
}
