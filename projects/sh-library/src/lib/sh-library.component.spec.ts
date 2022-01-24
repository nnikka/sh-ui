import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShLibraryComponent } from './sh-library.component';

describe('ShLibraryComponent', () => {
  let component: ShLibraryComponent;
  let fixture: ComponentFixture<ShLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
