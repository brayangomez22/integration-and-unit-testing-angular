import { increment } from './numbers';
describe('Numbers tests', () => {
  it('It must return 100, if the number entered is greater than 100', () => {
    const resp = increment(300);
    expect(resp).toBe(100);
  });

  it('It must return the number + 1, if the number entered is not greater than 100', () => {
    const resp = increment(10);
    expect(resp).toBe(11);
  });
});
