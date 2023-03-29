import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubUpdateComponent } from './club-update.component';

describe('UserProfileComponent', () => {
  let component: ClubUpdateComponent;
  let fixture: ComponentFixture<ClubUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
