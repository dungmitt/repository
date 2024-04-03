import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangComponent } from './bang.component';

describe('BangComponent', () => {
  let component: BangComponent;
  let fixture: ComponentFixture<BangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BangComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
