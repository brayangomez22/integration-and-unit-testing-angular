import { message } from './string';
describe('String tests', () => {
  it('It must return a string', () => {
    const resp = message('Brayan');
    expect(typeof resp).toBe('string');
  });

  it('You must return a greeting with the name sent', () => {
    const name = 'Brayan';
    const resp = message(name);
    expect(resp).toContain(name);
  });
});
