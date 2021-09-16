import { getRobots } from './arreglos';

describe('Arreglos tests', () => {
  it('At least three robots must return', () => {
    const resp = getRobots();

    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  it('There must be MegaMan and Ultron', () => {
    const resp = getRobots();

    expect(resp).toContain('MegaMan', 'Ultron');
  });
});
