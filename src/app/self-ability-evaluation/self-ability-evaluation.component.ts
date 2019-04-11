import { Component, OnInit } from '@angular/core';
import { AbilitiesService } from '../services/abilities.service';

@Component({
  selector: 'app-self-ability-evaluation',
  templateUrl: './self-ability-evaluation.component.html',
  styleUrls: ['./self-ability-evaluation.component.css']
})
export class SelfAbilityEvaluationComponent implements OnInit {

  constructor(public abilitiesService:AbilitiesService) { }

  ngOnInit() {
  }

}
