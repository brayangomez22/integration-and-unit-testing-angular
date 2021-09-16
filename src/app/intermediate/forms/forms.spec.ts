import { FormBuilder } from '@angular/forms';
import { FormsRegister } from './forms';
describe('Forms tests', () => {
  let component: FormsRegister;

  beforeEach(() => {
    component = new FormsRegister(new FormBuilder());
  });

  it('You must create a form with two fields', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('The email must be mandatory', () => {
    const control = component.form.get('email');
    control?.setValue('');

    expect(control?.valid).toBeFalsy();
  });

  it('The email must be a valid email', () => {
    const control = component.form.get('email');
    control?.setValue('brayan@gmail.com');

    expect(control?.valid).toBeTruthy();
  });
});
