import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PakaComponent } from './paka.component';

describe('PakaComponent', () => {
  let component: PakaComponent;
  let fixture: ComponentFixture<PakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
