import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuarosComponent } from './lista-usuaros.component';

describe('ListaUsuarosComponent', () => {
  let component: ListaUsuarosComponent;
  let fixture: ComponentFixture<ListaUsuarosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUsuarosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUsuarosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
