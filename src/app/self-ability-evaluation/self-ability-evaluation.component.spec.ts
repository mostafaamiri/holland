import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfAbilityEvaluationComponent } from './self-ability-evaluation.component';

describe('SelfAbilityEvaluationComponent', () => {
  let component: SelfAbilityEvaluationComponent;
  let fixture: ComponentFixture<SelfAbilityEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfAbilityEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfAbilityEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
