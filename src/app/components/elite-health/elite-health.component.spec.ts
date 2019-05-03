import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliteHealthComponent } from './elite-health.component';

describe('EliteHealthComponent', () => {
  let component: EliteHealthComponent;
  let fixture: ComponentFixture<EliteHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliteHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliteHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
