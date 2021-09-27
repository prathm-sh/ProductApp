import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecatComponent } from './createcat.component';

describe('CreatecatComponent', () => {
  let component: CreatecatComponent;
  let fixture: ComponentFixture<CreatecatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
