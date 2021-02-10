import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHistoricComponent } from './create-historic.component';

describe('CreateHistoricComponent', () => {
  let component: CreateHistoricComponent;
  let fixture: ComponentFixture<CreateHistoricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHistoricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
