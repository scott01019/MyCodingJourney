import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesHomeSubMenuComponent } from './articles-home-sub-menu.component';

describe('ArticlesHomeSubMenuComponent', () => {
  let component: ArticlesHomeSubMenuComponent;
  let fixture: ComponentFixture<ArticlesHomeSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesHomeSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesHomeSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
