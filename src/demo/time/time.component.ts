import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  display = {
    dayNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  }
  lang = {
    weeks: ['日', '一', '二', '三', '四', '五', '六'],
    time: ['时', '分'],
    timeTips: '选择时间',
    startTime: '开始时间',
    endTime: '结束时间',
    dateTips: '返回日期',
    month: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    tools: {
        confirm: '确定',
        cancel: '取消'
    }
  }

  monthDays: any[]= []; //日历数据
  // currentMonth = new Date().getMonth() + 1; //日历显示月份
  // currentYear = new Date().getFullYear(); //日历显示月份

  currentMonth = 3; //日历显示月份
  currentYear = 2019; //日历显示月份

  isMonthPanel: boolean = false;
  isDayPanel: boolean = true;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    console.log(this.getMonthAllDay(2019,12))//31
    console.log(this.getWeekFirstDay(2019,11))//5
    console.log(this.initMonthCalendar(2019,11))

    this.monthDays = this.initMonthCalendar(this.currentYear, this.currentMonth);
  } 

  //一个月有多少天
  getMonthAllDay(year, month){
    return new Date(year, month, 0).getDate();
  }
  //一个月第一天是周几
  getWeekFirstDay(year,month){
    return new Date(year,month-1,1).getDay()
  }
  //初始化日历
  initMonthCalendar(year,month){

    const week = this.getWeekFirstDay(year, month);
    const allDay = this.getMonthAllDay(year, month);
    const row = Math.ceil((week + allDay)/7);
    const prevAllDay: number = month-1>0 ? this.getMonthAllDay(year,month-1) : this.getMonthAllDay(year-1,12);//上月一共有几天
    const nextAllDay = row*7 - week - allDay; //下月显示几天

    
    console.log(prevAllDay)
    

    let prevDay = prevAllDay - week + 1; //第一个day是几号
    let monthData: any[] = new Array(row);

    for(let i = 0; i < row; i++){
      monthData[i] = [];
      for(let j = 0; j < 7; j++){
        if(i == 0 && j < week){
          monthData[i][j] = { 
            day: prevDay ++,
            month: month - 1,
            year: year
          };
        }else if((j - week + i + 1)+ i*row <= allDay){
          monthData[i][j] = {
            day: (j - week + i + 1)+ i*row,
            month: month,
            year: year
          };
        }else{
          monthData[i][j] = {
            day: j - 6 + nextAllDay,
            month: month + 1,
            year: year
          };
        }
      }
    }
    return monthData
  }

  //上个月
  prevMonth(){
    if(--this.currentMonth < 1){
      this.currentYear--;
      this.currentMonth = 12;
    }
    this.monthDays = this.initMonthCalendar(this.currentYear, this.currentMonth);
  }
  //下个月
  nextMonth(){
    if(++this.currentMonth > 12){
      this.currentYear++;
      this.currentMonth = 1
    }
    this.monthDays = this.initMonthCalendar(this.currentYear, this.currentMonth);
  }

  selDay(i){
    this.isDayPanel = true;
    this.isMonthPanel = false;
    if(i != this.currentMonth){
      this.monthDays = this.initMonthCalendar(this.currentYear, i+1);
      this.currentMonth = i+1;
    }
  }
  selMonth(){
    this.isMonthPanel = true;
    this.isDayPanel = false;
  }
}
