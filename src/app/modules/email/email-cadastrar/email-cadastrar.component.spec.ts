import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCadastrarComponent } from './email-cadastrar.component';

describe('EmailCadastrarComponent', () => {
  let component: EmailCadastrarComponent;
  let fixture: ComponentFixture<EmailCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
