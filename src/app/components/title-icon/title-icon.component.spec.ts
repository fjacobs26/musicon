import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleIconComponent } from './title-icon.component';

describe('TitleIconComponent', () => {
  let component: TitleIconComponent;
  let fixture: ComponentFixture<TitleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
