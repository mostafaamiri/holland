import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfSkillEvaluationComponent } from './self-skill-evaluation.component';

describe('SelfSkillEvaluationComponent', () => {
  let component: SelfSkillEvaluationComponent;
  let fixture: ComponentFixture<SelfSkillEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfSkillEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfSkillEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
