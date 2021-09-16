import { GamerTwo } from './eventEmitter';

describe('Gamer Two Emir', () => {
  let gamer: GamerTwo;

  beforeEach(() => (gamer = new GamerTwo()));

  it('Must emit an event when it takes damage', () => {
    let newHP = 0;

    gamer.hpChange.subscribe((hp) => (newHP = hp));

    gamer.takeDanio(1000);

    expect(newHP).toBe(0);
  });

  it('Must cast an event when it takes damage and survive if it is less than 100', () => {
    let newHP = 0;

    gamer.hpChange.subscribe((hp) => (newHP = hp));

    gamer.takeDanio(50);

    expect(newHP).toBe(50);
  });
});
