import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlinkComponent } from './tlink.component';

describe('TlinkComponent', () => {
  let component: TlinkComponent;
  let fixture: ComponentFixture<TlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
