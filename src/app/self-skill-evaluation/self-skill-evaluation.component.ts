import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-self-skill-evaluation',
  templateUrl: './self-skill-evaluation.component.html',
  styleUrls: ['./self-skill-evaluation.component.css']
})
export class SelfSkillEvaluationComponent implements OnInit {

  constructor(public skillsService:SkillsService) { }

  ngOnInit() {
  }

}
