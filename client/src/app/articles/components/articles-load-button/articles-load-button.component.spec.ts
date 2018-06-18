import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesLoadButtonComponent } from './articles-load-button.component';

describe('ArticlesLoadButtonComponent', () => {
  let component: ArticlesLoadButtonComponent;
  let fixture: ComponentFixture<ArticlesLoadButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesLoadButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesLoadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
