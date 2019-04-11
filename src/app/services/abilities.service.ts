import { Injectable } from "@angular/core";

@Injectable()
export class AbilitiesService{
    abilities = Array<Ability>();
    constructor(){
        this.abilities = [
            new Ability("توانایی مکانیکی و جسمانی","R"),
            new Ability("توانایی علمی و پژوهشی","I"),
            new Ability("توانایی هنری، تصویری و تجسمی","A"),
            new Ability("توانایی برقراری ارتباط و انتقال مطالب","S"),
            new Ability("توانایی رهبری و مدیریتی","E"),
            new Ability("توانایی کارهای اداری و دفتری","C")
        ];
    }

}
export class Ability{
    name:string;
    rate:number;
    comment:string;
    image:string;
    type:string;
    constructor(name:string, type:string, rate:number = 0,comment:string="",image:string=""){
        this.name = name;
        this.rate = rate;
        this.comment = comment;
        this.image = image;
        this.type = type;
    }
}