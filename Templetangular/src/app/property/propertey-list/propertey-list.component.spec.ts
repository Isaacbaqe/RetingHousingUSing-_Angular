import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperteyListComponent } from './propertey-list.component';

describe('ProperteyListComponent', () => {
  let component: ProperteyListComponent;
  let fixture: ComponentFixture<ProperteyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProperteyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProperteyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
