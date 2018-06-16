import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesHomePageComponent } from './articles-home-page.component';

describe('ArticlesHomePageComponent', () => {
  let component: ArticlesHomePageComponent;
  let fixture: ComponentFixture<ArticlesHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
