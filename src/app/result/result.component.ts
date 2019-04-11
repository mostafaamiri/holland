import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../services/thems.service';
import { SkillsService } from '../services/skills.service';
import { AbilitiesService } from '../services/abilities.service';
import { ChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent{
  public radarChartOptions: ChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['واقع گرا', 'جستجوگر', 'هنری', 'اجتماعی', 'متهور', 'قراردادی'];

  public radarChartData: ChartDataSets[] = [
    { data: [0,0,0,0,0,0], label: 'مدل رغبت شغلی' }
  ];
  public radarChartType: ChartType = 'radar';
  constructor(private themesService:ThemesService, private skillsService:SkillsService, private abilitiesService:AbilitiesService){

  }
  setDataSet(){
    let rScore: number = 0;
    let iScore: number = 0;
    let aScore: number = 0;
    let sScore: number = 0;
    let eScore: number = 0;
    let cScore: number = 0;
  //
  for(let question of this.themesService.jobQs){
    switch (question.type){
      case "R":
       if(question.answer) rScore++;
       break;
      case "I":
      if(question.answer) iScore++;
        break;
      case "A":
        if(question.answer) aScore++;
        break;
      case "S":
        if(question.answer) sScore++;
        break;
      case "E":
        if(question.answer) eScore++;
        break;
      case "C":
        if(question.answer) cScore++;
        break;
    }
  }
  //
  for(let question of this.themesService.activityQs){
    switch (question.type){
      case "R":
       if(question.answer) rScore++;
       break;
      case "I":
      if(question.answer) iScore++;
        break;
      case "A":
        if(question.answer) aScore++;
        break;
      case "S":
        if(question.answer) sScore++;
        break;
      case "E":
        if(question.answer) eScore++;
        break;
      case "C":
        if(question.answer) cScore++;
        break;
    }
  }
  //
  for(let question of this.themesService.competencyQs){
    switch (question.type){
      case "R":
       if(question.answer) rScore++;
       break;
      case "I":
      if(question.answer) iScore++;
        break;
      case "A":
        if(question.answer) aScore++;
        break;
      case "S":
        if(question.answer) sScore++;
        break;
      case "E":
        if(question.answer) eScore++;
        break;
      case "C":
        if(question.answer) cScore++;
        break;
    }
  }
  //
  for(let skill of this.skillsService.skills){
    switch (skill.type){
      case "R":
       rScore += skill.rate;
       break;
      case "I":
        iScore += skill.rate;
        break;
      case "A":
        aScore += skill.rate;
        break;
      case "S":
        sScore += skill.rate;
        break;
      case "E":
        eScore += skill.rate;
        break;
      case "C":
        cScore += skill.rate;
        break;
    }
  }  
  //
  for(let ability of this.abilitiesService.abilities){
    switch (ability.type){
      case "R":
       rScore += ability.rate;
       break;
      case "I":
        iScore += ability.rate;
        break;
      case "A":
        aScore += ability.rate;
        break;
      case "S":
        sScore += ability.rate;
        break;
      case "E":
        eScore += ability.rate;
        break;
      case "C":
        cScore += ability.rate;
        break;
    }
  }
  //
  
  
      let sumScores = [
        new Score("R",rScore),
        new Score("I",iScore),
        new Score("A",aScore),
        new Score("S",sScore),
        new Score("E",eScore),
        new Score("C",cScore)
      ];
    this.radarChartData= [
      { data: [rScore,iScore,aScore,sScore,eScore,cScore], label: 'مدل رغبت شغلی' }
    ];
  }
  getActivityScores(){
    let activityScores = Array<Score>();
    let rScore: number = 0;
    let iScore: number = 0;
    let aScore: number = 0;
    let sScore: number = 0;
    let eScore: number = 0;
    let cScore: number = 0;
    for(let question of this.themesService.activityQs){
      switch (question.type){
        case "R":
         if(question.answer) rScore++;
         break;
        case "I":
        if(question.answer) iScore++;
          break;
        case "A":
          if(question.answer) aScore++;
          break;
        case "S":
          if(question.answer) sScore++;
          break;
        case "E":
          if(question.answer) eScore++;
          break;
        case "C":
          if(question.answer) cScore++;
          break;
      }
    }
    activityScores = [
      new Score("R",rScore),
      new Score("I",iScore),
      new Score("A",aScore),
      new Score("S",sScore),
      new Score("E",eScore),
      new Score("C",cScore)
    ];
    return activityScores;
  }
  getCompetencyScores(){
    let competencyScores = Array<Score>();
    let rScore: number = 0;
    let iScore: number = 0;
    let aScore: number = 0;
    let sScore: number = 0;
    let eScore: number = 0;
    let cScore: number = 0;
    for(let question of this.themesService.competencyQs){
      switch (question.type){
        case "R":
         if(question.answer) rScore++;
         break;
        case "I":
        if(question.answer) iScore++;
          break;
        case "A":
          if(question.answer) aScore++;
          break;
        case "S":
          if(question.answer) sScore++;
          break;
        case "E":
          if(question.answer) eScore++;
          break;
        case "C":
          if(question.answer) cScore++;
          break;
      }
    }
    competencyScores = [
      new Score("R",rScore),
      new Score("I",iScore),
      new Score("A",aScore),
      new Score("S",sScore),
      new Score("E",eScore),
      new Score("C",cScore)
    ];
    return competencyScores;
  }
  getJobScores(){
    let jobScores = Array<Score>();
    let rScore: number = 0;
    let iScore: number = 0;
    let aScore: number = 0;
    let sScore: number = 0;
    let eScore: number = 0;
    let cScore: number = 0;
    for(let question of this.themesService.jobQs){
      switch (question.type){
        case "R":
         if(question.answer) rScore++;
         break;
        case "I":
        if(question.answer) iScore++;
          break;
        case "A":
          if(question.answer) aScore++;
          break;
        case "S":
          if(question.answer) sScore++;
          break;
        case "E":
          if(question.answer) eScore++;
          break;
        case "C":
          if(question.answer) cScore++;
          break;
      }
    }
    jobScores = [
      new Score("R",rScore),
      new Score("I",iScore),
      new Score("A",aScore),
      new Score("S",sScore),
      new Score("E",eScore),
      new Score("C",cScore)
    ];
    return jobScores;
  }

  getSkillScore(){
    let rScore: number = 0;
    let iScore: number = 0;
    let aScore: number = 0;
    let sScore: number = 0;
    let eScore: number = 0;
    let cScore: number = 0;
    for(let skill of this.skillsService.skills){
      switch (skill.type){
        case "R":
         rScore = skill.rate;
         break;
        case "I":
          iScore = skill.rate;
          break;
        case "A":
          aScore = skill.rate;
          break;
        case "S":
          sScore = skill.rate;
          break;
        case "E":
          eScore = skill.rate;
          break;
        case "C":
          cScore = skill.rate;
          break;
      }
    }
    let skillScores = [
      new Score("R",rScore),
      new Score("I",iScore),
      new Score("A",aScore),
      new Score("S",sScore),
      new Score("E",eScore),
      new Score("C",cScore)
    ];
    return skillScores;
  }

  getAbilityScore(){
    let rScore: number = 0;
    let iScore: number = 0;
    let aScore: number = 0;
    let sScore: number = 0;
    let eScore: number = 0;
    let cScore: number = 0;
    for(let ability of this.abilitiesService.abilities){
      switch (ability.type){
        case "R":
         rScore = ability.rate;
         break;
        case "I":
          iScore = ability.rate;
          break;
        case "A":
          aScore = ability.rate;
          break;
        case "S":
          sScore = ability.rate;
          break;
        case "E":
          eScore = ability.rate;
          break;
        case "C":
          cScore = ability.rate;
          break;
      }
    }
    let abilityScores = [
      new Score("R",rScore),
      new Score("I",iScore),
      new Score("A",aScore),
      new Score("S",sScore),
      new Score("E",eScore),
      new Score("C",cScore)
    ];
    return abilityScores;
  }
getTotlaScore(){
  let rScore: number = 0;
  let iScore: number = 0;
  let aScore: number = 0;
  let sScore: number = 0;
  let eScore: number = 0;
  let cScore: number = 0;
//
for(let question of this.themesService.jobQs){
  switch (question.type){
    case "R":
     if(question.answer) rScore++;
     break;
    case "I":
    if(question.answer) iScore++;
      break;
    case "A":
      if(question.answer) aScore++;
      break;
    case "S":
      if(question.answer) sScore++;
      break;
    case "E":
      if(question.answer) eScore++;
      break;
    case "C":
      if(question.answer) cScore++;
      break;
  }
}
//
for(let question of this.themesService.activityQs){
  switch (question.type){
    case "R":
     if(question.answer) rScore++;
     break;
    case "I":
    if(question.answer) iScore++;
      break;
    case "A":
      if(question.answer) aScore++;
      break;
    case "S":
      if(question.answer) sScore++;
      break;
    case "E":
      if(question.answer) eScore++;
      break;
    case "C":
      if(question.answer) cScore++;
      break;
  }
}
//
for(let question of this.themesService.competencyQs){
  switch (question.type){
    case "R":
     if(question.answer) rScore++;
     break;
    case "I":
    if(question.answer) iScore++;
      break;
    case "A":
      if(question.answer) aScore++;
      break;
    case "S":
      if(question.answer) sScore++;
      break;
    case "E":
      if(question.answer) eScore++;
      break;
    case "C":
      if(question.answer) cScore++;
      break;
  }
}
//
for(let skill of this.skillsService.skills){
  switch (skill.type){
    case "R":
     rScore += skill.rate;
     break;
    case "I":
      iScore += skill.rate;
      break;
    case "A":
      aScore += skill.rate;
      break;
    case "S":
      sScore += skill.rate;
      break;
    case "E":
      eScore += skill.rate;
      break;
    case "C":
      cScore += skill.rate;
      break;
  }
}  
//
for(let ability of this.abilitiesService.abilities){
  switch (ability.type){
    case "R":
     rScore += ability.rate;
     break;
    case "I":
      iScore += ability.rate;
      break;
    case "A":
      aScore += ability.rate;
      break;
    case "S":
      sScore += ability.rate;
      break;
    case "E":
      eScore += ability.rate;
      break;
    case "C":
      cScore += ability.rate;
      break;
  }
}
//


    let sumScores = [
      new Score("R",rScore),
      new Score("I",iScore),
      new Score("A",aScore),
      new Score("S",sScore),
      new Score("E",eScore),
      new Score("C",cScore)
    ];
    /*this.radarChartData = [
      { data: [1,2,3,4,5,6], label: 'مدل رغبت شغلی' }
    ];*/
    
    //[rScore,iScore,aScore,sScore,eScore,cScore]
    return sumScores;
  
}
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}


export class Score{
  name:string;
  value:number;
  constructor(name:string,value:number){
    this.name = name;
    this.value = value;
  }
}