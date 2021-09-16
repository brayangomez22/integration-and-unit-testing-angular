import { userLoggedin } from './booleanos';
describe('booleanos tests', () => {
  it('should return true', () => {
    const resp = userLoggedin();
    expect(resp).toBeTruthy(true);
  });
});
