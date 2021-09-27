import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadcatComponent } from './readcat.component';

describe('ReadcatComponent', () => {
  let component: ReadcatComponent;
  let fixture: ComponentFixture<ReadcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
