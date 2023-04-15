import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtarefasComponent } from './formtarefas.component';

describe('FormtarefasComponent', () => {
  let component: FormtarefasComponent;
  let fixture: ComponentFixture<FormtarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtarefasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormtarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
