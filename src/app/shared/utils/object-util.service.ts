import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectUtilSrv {

  constructor() { }

  getDataType(o) {
    return Object.prototype.toString.call(o).slice(8,-1);
  }

  isObject(o) {
    return this.getDataType(o) === 'Object';
  }

  isArray(o) {
    return this.getDataType(o) === 'Array';
  }

  isString(o) {
    return this.getDataType(o) === 'String';
  }

  isNumber(o) {
    return this.getDataType(o) === 'Number' && !isNaN(o);
  }
  isDate(o) {
    return this.getDataType(o) === 'Date';
  }

  /* 删除前后空格
    */
   trim(data){
    return this.encodeStr(data, v=>v.trim());
  }
  
  /* 删除对象的空属性
  */
  delNull(data){
    return this.encodeStr(data, v=>v, true);
  }
  /* 删除对象的空属性并且去空格
  */
  delNullAndTrim(data){
    return this.encodeStr(data, v=>v.trim(), true)
  }
  
  /* 深度克隆
  */
  clone(data){
    return this.encodeStr(data, v=>v);
  }

  encodeStr(data, fn: Function, isDelNull: boolean = false){
    if(this.isDate(data)){
      return new Date().setTime(data.getTime());
    }else if(this.isObject(data)){
      let newdata = {};
      for(let i = 0; i < Object.keys(data).length; i++){
        let tem = this.encodeStr(Object.values(data)[i], fn, isDelNull);
        if(!isDelNull || ((tem != null && tem != ''))){
          newdata[Object.keys(data)[i]] = tem;
        }
        tem = null;
      }
      return newdata;
    }else if(this.isArray(data)){
      let newdata = [];
      for(let i = 0; i < data.length; i++){
        newdata.push(this.encodeStr(data[i], fn, isDelNull));
      }
      return newdata
    }else if(typeof data == 'string'){
      return fn(data)
    }else{
      return data;
    }
  }


  //数字小写转大写
  digitUppercase(n) {
    const fraction = ['角', '分'];
    const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
    const head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    let s = '';
    for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (let i = 0; i < unit[0].length && n > 0; i++) {
        let p = '';
        for (let j = 0; j < unit[1].length && n > 0; j++) {p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
  };

  /*生成指定范围随机数
  */
  randomNum(min, max) {
    return Math.floor(min + Math.random() * (max - min));
  }


}
