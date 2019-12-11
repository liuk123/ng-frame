import { Injectable } from '@angular/core';
import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable()
export class valideUtilsSrv{
  constructor(){}

  //字母，数字、下划线
  normalChar(control:AbstractControl):{[key:string]:any}|null{
    if(!control.value) return null;
    if(!/^[_A-Za-z0-9]*$/.test(control.value)){
        return {normalChar:{info:'请输入数字、字母、下划线'}};
    }
  }
  //特殊字符
  exceptSpecialChar(n):ValidatorFn{
    let reg = new RegExp(`[\`\~\!\@\#\$\%\^\&\*\(\)\=\+\;\:\'\"\\\|\,<\.\>\/\?\[\]\{\}]`)
    return this.forbiddenNameValidator(reg,{exceptSpecialChar:{info:`不可包含以下字符：\` ~ ! @ # $ % ^ & * ( ) = + ; : ' " |, < > . / ? [ ]{ }`}})
  }
  //url
  url(n):ValidatorFn{
    let reg = new RegExp('^(ht|f)tp(s?)://[0-9a-zA-Z]([-.w]*[0-9a-zA-Z])*(:(0-9)*)' + "*(/?)([a-zA-Z0-9-.?,'/\\+&amp;%$#_]*)?")
    return this.forbiddenNameValidator(reg,{url:{info:`不能包含特殊字符`}})
  }
  //n位小数的正实数
  decimals(n):ValidatorFn{
      let reg = new RegExp(`^[0-9]+(.[0-9]{1,${n}})?$`)
      return this.forbiddenNameValidator(reg,{decimals:{info:`请输入小于${n}位的正整数`}})
  }

  //正整数
  int(control:AbstractControl){
    if(!control.value) return null;
    if(!/^-?\d+$/.test(control.value) || control.value<=0){
      return {int:{info:'请输入整数'}};
    }
  }

  //1-28号
  month28(control:AbstractControl){
    if(!control.value) return null;
    if(!/^(?:[1-9]|(1[0-9])?|2[0-8])$/.test(control.value) || control.value<=0){
      return {int:{info:'请输入1-28的数字'}};
    }
  }

  forbiddenNameValidator(nameRe: RegExp, info): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? null : info;
    };
  }



  valid(){
    //邮箱
    let reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    //大于10的数字
    reg=/^[1][1-9]$|^[2-9][0-9]$|^[1-9][0-9]{2,7}$/
    //身份证号
    reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
    //手机
    reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
    var regMobile = /^((\+?86)|(\(\+86\)))?1\d{10}$/; //手机
    var regTel = /^((\+?86)|(\(\+86\)))?\d{3,4}-?\d{7,8}(-\d{3,4})?$/; //固话

    //不包含特殊字符
    reg = /[\`\~\!\@\#\$\%\^\&\*\(\)\=\+\;\:\'\"\\\|\,<\.\>\/\?\[\]\{\}]/;
    //字母数字和下划线
    reg = /^[_A-Za-z0-9]*$/;
    //ip，平时说ip,就指ipv4
    reg = /^((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))$/;
    //ip+端口号
    let regstr ='^((?:(?:25[0-5]|2[0-4]\\d|((1\\d{2})|([1-9]?\\d)))\\.){3}(?:25[0-5]|2[0-4]\\d|((1\\d{2})|' +
            '([1-9]?\\d))))(:((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([1-9]' +
            '[0-9]{3})|([1-9][0-9]{2})|([1-9][0-9]{1})|([0-9])))?$';
    regstr =
        '^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([1-9]' +
        '[0-9]{3})|([1-9][0-9]{2})|([1-9][0-9]{1})|([0-9]))?$'
    //ipv6
    regstr =
            '^s*((([0-9A-Fa-f]{1,4}[:-]){7}(([0-9A-Fa-f]{1,4})|[:-]))|(([0-9A-Fa-f]{1,4}[:-]){6}([:-]' +
            '|((25[0-5]|2[0-4]d|[01]?d{1,2})(.(25[0-5]|2[0-4]d|[01]?d{1,2})){3})|([:-][0-9A-Fa-f]{1,4})))|' +
            '(([0-9A-Fa-f]{1,4}[:-]){5}(([:-]((25[0-5]|2[0-4]d|[01]?d{1,2})(.(25[0-5]|2[0-4]d|[01]?d{1,2}))' +
            '{3})?)|(([:-][0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}[:-]){4}([:-][0-9A-Fa-f]{1,4}){0,1}(([:-]' +
            '((25[0-5]|2[0-4]d|[01]?d{1,2})(.(25[0-5]|2[0-4]d|[01]?d{1,2})){3})?)|(([:-][0-9A-Fa-f]{1,4})' +
            '{1,2})))|(([0-9A-Fa-f]{1,4}[:-]){3}([:-][0-9A-Fa-f]{1,4}){0,2}(([:-]((25[0-5]|2[0-4]d|[01]?d{1,2})' +
            '(.(25[0-5]|2[0-4]d|[01]?d{1,2})){3})?)|(([:-][0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}[:-]){2}' +
            '([:-][0-9A-Fa-f]{1,4}){0,3}(([:-]((25[0-5]|2[0-4]d|[01]?d{1,2})(.(25[0-5]|2[0-4]d|[01]?d{1,2}))' +
            '{3})?)|(([:-][0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}[:-])([:-][0-9A-Fa-f]{1,4}){0,4}(([:-]' +
            '((25[0-5]|2[0-4]d|[01]?d{1,2})(.(25[0-5]|2[0-4]d|[01]?d{1,2})){3})?)|(([:-][0-9A-Fa-f]{1,4})' +
            '{1,2})))|([:-]([:-][0-9A-Fa-f]{1,4}){0,5}(([:-]((25[0-5]|2[0-4]d|[01]?d{1,2})(.(25[0-5]|2[0-4]d|' +
            '[01]?d{1,2})){3})?)|(([:-][0-9A-Fa-f]{1,4}){1,2})))|(((25[0-5]|2[0-4]d|[01]?d{1,2})(.(25[0-5]' +
            '|2[0-4]d|[01]?d{1,2})){3})))(%.+)?s*$'
    //mac
    reg =  /^([A-Fa-f0-9]{2}[:-]){5}[A-Fa-f0-9]{2}$/;
  }
  validateMsg = {
    exceptSpecialChar: '不可包含以下字符：` ~ ! @ # $ % ^ & * ( ) = + ; : \' " |, < > . / ? [ ]{ }',
    normalChar: '只能包含字母、数字和下划线',
    required: '必填项',
    ip: 'IP格式不正确',
    ipPort: '格式不正确',
    port: '端口号为0-65535之间的整数',
    ipv6: 'IPV6格式不正确',
    email: '邮箱格式不正确',
    phone: '电话格式不正确',
    ipRanges: 'IP网段不正确',
    cidr: ' CIDR IP地址不正确',
    mac: 'MAC地址不正确',
    number: '请输入数字',
    maxValue: '请输入不大于{0}的数值',
    minValue: '请输入不小于{0}的数值',
    valueRange: '请输入{0}到{1}之间的数值',
    int: '只可输入整数',
    maxLength: '不可超过{0}个字符',
    minLength: '不可少于{0}个字符',
    lengthRange: '{0}到{1}个字符',
    url: 'url格式不正确',
    equalTo: '两次输入密码不一致',
    remote: '数据已存在'
  };

  placeholder = {
    ip: '如:192.168.3.10',
    ipPort: '如:192.168.3.10:8080',
    ipRanges: '如:192.168.3.10-192.168.3.50',
    mac: '如:00-E0-4C-32-56-76',
    port: '0-65535之间的整数',
    maxValue: '输入不大于{0}的数值',
    minValue: '输入不小于{0}的数值',
    valueRange: '输入{0}到{1}之间的数值',
    int: '只可输入整数',
    maxLength: '不可超过{0}个字符',
    minLength: '不可少于{0}个字符',
    lengthRange: '{0}到{1}个字符',
    url: '如:http://www.neiwang.cn'
  };

  
  
}

