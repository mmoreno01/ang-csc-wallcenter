import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RitualesEspecialesComponent } from './rituales-especiales.component';

describe('RitualesEspecialesComponent', () => {
  let component: RitualesEspecialesComponent;
  let fixture: ComponentFixture<RitualesEspecialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RitualesEspecialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RitualesEspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
