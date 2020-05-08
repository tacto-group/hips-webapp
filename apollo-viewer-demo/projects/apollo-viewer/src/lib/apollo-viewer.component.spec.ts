import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApolloViewerComponent } from './apollo-viewer.component';

describe('ApolloViewerComponent', () => {
  let component: ApolloViewerComponent;
  let fixture: ComponentFixture<ApolloViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApolloViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApolloViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
