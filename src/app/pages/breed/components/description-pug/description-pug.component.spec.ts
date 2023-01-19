import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPugComponent } from './description-pug.component';

describe('DescriptionPugComponent', () => {
  let component: DescriptionPugComponent;
  let fixture: ComponentFixture<DescriptionPugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionPugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionPugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
