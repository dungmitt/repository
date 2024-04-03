import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaoComponent } from './thao.component';

describe('ThaoComponent', () => {
  let component: ThaoComponent;
  let fixture: ComponentFixture<ThaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
