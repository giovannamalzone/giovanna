import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriositiesBistecaComponent } from './curiosities-bisteca.component';

describe('CuriositiesBistecaComponent', () => {
  let component: CuriositiesBistecaComponent;
  let fixture: ComponentFixture<CuriositiesBistecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriositiesBistecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuriositiesBistecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
