import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvResumeComponent } from './cv-resume.component';

describe('CvResumeComponent', () => {
  let component: CvResumeComponent;
  let fixture: ComponentFixture<CvResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
