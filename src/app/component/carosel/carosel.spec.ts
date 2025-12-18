import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carosel } from './carosel';

describe('Carosel', () => {
  let component: Carosel;
  let fixture: ComponentFixture<Carosel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carosel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carosel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
