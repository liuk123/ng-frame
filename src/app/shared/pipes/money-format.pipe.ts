import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'moneyformat'
})
export class MoneyFormatPipe implements PipeTransform {
    transform(value: any, args?: any){
        // return (value || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
        let v = (value || 0).toString();
        if(v.includes('.')){
            return v.slice(0,v.indexOf('.')).replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + v.slice(v.indexOf('.'));
        }else{
            return (value || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
        }
    }
}