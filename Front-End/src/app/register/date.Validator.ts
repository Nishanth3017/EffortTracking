import { AbstractControl } from "@angular/forms";

export class DateValidator {
    static checkDate(date: AbstractControl) {
        let myDate:Date=new Date(date.value)
        let today:Date=new Date();
        console.log(myDate)
        console.log(today)
        console.log(myDate<today)
        let val:number=today.getTime()-myDate.getTime()
        var diffDays:number = Math.ceil(val / (1000 * 3600 * 24 * 365)); 
        console.log(val)
        console.log(diffDays)
        console.log(diffDays<21)
        if(myDate>today)
        return {'checkDate':true};
        else{
            if(diffDays<21)
               return {'checkDate':true};
        }
        return null;
    }
}
