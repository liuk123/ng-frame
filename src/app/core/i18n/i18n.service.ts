// 请参考：https://ng-alain.com/docs/i18n
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { registerLocaleData } from '@angular/common';
import ngZh from '@angular/common/locales/zh';
import ngEn from '@angular/common/locales/en';
import ngZhTw from '@angular/common/locales/zh-Hant';


interface LangData {
  text: string;
  ng: any;
  zorro: any;
  dateFns: any;
  delon: any;
  abbr: string;
}

const DEFAULT = 'zh-CN';
const LANGS: { [key: string]: LangData } = {
 
};

@Injectable({ providedIn: 'root' })
export class I18NService {
  private _default = DEFAULT;
  private change$ = new BehaviorSubject<string | null>(null);

  private _langs = Object.keys(LANGS).map(code => {
    const item = LANGS[code];
    return { code, text: item.text, abbr: item.abbr };
  });

  constructor() { }
}
