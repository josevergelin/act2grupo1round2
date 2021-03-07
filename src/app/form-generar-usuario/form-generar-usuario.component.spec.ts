import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGenerarUsuarioComponent } from './form-generar-usuario.component';

describe('FormGenerarUsuarioComponent', () => {
  let component: FormGenerarUsuarioComponent;
  let fixture: ComponentFixture<FormGenerarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGenerarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGenerarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
