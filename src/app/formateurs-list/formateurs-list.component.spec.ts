import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateursListComponent } from './formateurs-list.component';

describe('FormateursListComponent', () => {
  let component: FormateursListComponent;
  let fixture: ComponentFixture<FormateursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateursListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
