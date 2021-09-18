import { IncrementadorComponent } from './incrementador.component';

describe('Incremendator Component Unit', () => {
  let component: IncrementadorComponent;

  beforeEach(() => (component = new IncrementadorComponent()));

  it('Progress should not exceed 100', () => {
    component.progreso = 50;
    component.cambiarValor(5);

    expect(component.progreso).toBe(55);
  });
});
