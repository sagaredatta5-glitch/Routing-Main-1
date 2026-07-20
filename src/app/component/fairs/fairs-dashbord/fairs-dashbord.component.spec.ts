import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsDashbordComponent } from './fairs-dashbord.component';

describe('FairsDashbordComponent', () => {
  let component: FairsDashbordComponent;
  let fixture: ComponentFixture<FairsDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairsDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairsDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
