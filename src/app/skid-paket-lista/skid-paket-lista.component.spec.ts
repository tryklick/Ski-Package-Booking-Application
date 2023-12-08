import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkidPaketListaComponent } from './skid-paket-lista.component';

describe('SkidPaketListaComponent', () => {
  let component: SkidPaketListaComponent;
  let fixture: ComponentFixture<SkidPaketListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkidPaketListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkidPaketListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
