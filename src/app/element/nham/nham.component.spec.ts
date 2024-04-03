import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhamComponent } from './nham.component';

describe('NhamComponent', () => {
  let component: NhamComponent;
  let fixture: ComponentFixture<NhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NhamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
