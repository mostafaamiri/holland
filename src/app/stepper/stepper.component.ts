import { Component, OnInit } from '@angular/core';
import { ThemesService, Question } from '../services/thems.service';
import { maybeQueueResolutionOfComponentResources } from '@angular/core/src/metadata/resource_loading';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  
  constructor(public themesService:ThemesService) {}

  ngOnInit() {

  }
  getActivityQs(type:string){
    let questions = Array<Question>();
    for(let question of this.themesService.activityQs){
      if(question.type == type){
        questions.push(question);
      }
    }
    return questions;
  }
  getCompetencyQs(type:string){
    let questions = Array<Question>();
    for(let question of this.themesService.competencyQs){
      if(question.type == type){
        questions.push(question);
      }
    }
    return questions;
  }
  getJobQs(type:string){
    let questions = Array<Question>();
    for(let question of this.themesService.jobQs){
      if(question.type == type){
        questions.push(question);
      }
    }
    return questions;
  }
}
