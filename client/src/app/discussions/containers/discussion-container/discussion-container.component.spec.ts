import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionContainerComponent } from './discussion-container.component';

describe('DiscussionContainerComponent', () => {
  let component: DiscussionContainerComponent;
  let fixture: ComponentFixture<DiscussionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
