import { Gamer } from './classes';
describe('Classes tests', () => {
  let gamer = new Gamer();

  beforeEach(() => {
    gamer = new Gamer();
  });

  it('It should return 80 hp, if it takes 20 damage', () => {
    const resp = gamer.takeDanio(20);

    expect(resp).toBe(80);
  });

  it('It should return 50 hp, if it takes 50 damage', () => {
    const resp = gamer.takeDanio(50);

    expect(resp).toBe(50);
  });

  it('It should return 0 hp, if it takes 100 damage', () => {
    const resp = gamer.takeDanio(100);

    expect(resp).toBe(0);
  });
});
