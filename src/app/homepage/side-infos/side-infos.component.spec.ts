import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideInfosComponent } from './side-infos.component';

describe('SideInfosComponent', () => {
  let component: SideInfosComponent;
  let fixture: ComponentFixture<SideInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
