import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDashbordComponent } from './products-dashbord.component';

describe('ProductsDashbordComponent', () => {
  let component: ProductsDashbordComponent;
  let fixture: ComponentFixture<ProductsDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
