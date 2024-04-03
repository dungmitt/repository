import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuyComponent } from './thuy.component';

describe('ThuyComponent', () => {
  let component: ThuyComponent;
  let fixture: ComponentFixture<ThuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThuyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
