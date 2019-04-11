import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatSliderModule, MatFormFieldModule, MatListModule, MatVerticalStepper, MatStepperModule, MatRadioModule} from '@angular/material';
import { SelfSkillEvaluationComponent } from './self-skill-evaluation/self-skill-evaluation.component';
import { SkillsService } from './services/skills.service';
import { StepperComponent } from './stepper/stepper.component';
import { ThemesService } from './services/thems.service';
import { SelfAbilityEvaluationComponent } from './self-ability-evaluation/self-ability-evaluation.component';
import { AbilitiesService } from './services/abilities.service';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    SelfSkillEvaluationComponent,
    StepperComponent,
    SelfAbilityEvaluationComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSliderModule,
    MatFormFieldModule,
    MatListModule,
    MatStepperModule,
    MatRadioModule,
    FormsModule,
    ChartsModule
  ],
  providers: [
    SkillsService,
    ThemesService,
    AbilitiesService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
