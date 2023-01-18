import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelHomeComponent } from './label-home.component';

describe('LabelHomeComponent', () => {
  let component: LabelHomeComponent;
  let fixture: ComponentFixture<LabelHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
