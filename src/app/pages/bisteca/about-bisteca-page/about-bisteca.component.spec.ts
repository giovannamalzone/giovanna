import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBistecaComponent } from './about-bisteca.component';

describe('AboutBistecaComponent', () => {
  let component: AboutBistecaComponent;
  let fixture: ComponentFixture<AboutBistecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBistecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutBistecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
