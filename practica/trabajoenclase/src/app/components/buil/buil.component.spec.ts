import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilComponent } from './buil.component';

describe('BuilComponent', () => {
  let component: BuilComponent;
  let fixture: ComponentFixture<BuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
