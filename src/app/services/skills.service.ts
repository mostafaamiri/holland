import { Injectable } from "@angular/core";

@Injectable()
export class SkillsService{
    skills = Array<Skill>();
    constructor(){
        this.skills = [
            new Skill("مهارت های دستی کار با ابزار و اشیاء","R"),
            new Skill("مهارت های محاسباتی و تحلیلی","I"),
            new Skill("مهارت های موسیقی","A"),
            new Skill("مهارت های تدریس","S"),
            new Skill("مهارت های فروشندگی و اداره کردن دیگران","E"),
            new Skill("مهارت های منشیگری","C")
        ]
    }
}
export class Skill{
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