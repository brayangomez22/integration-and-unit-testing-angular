import { ROUTES } from './routes';
import { MedicoComponent } from '../../intermediateTwo/medico/medico.component';

describe('Main routes', () => {
  it('There must be the path /doctor/:id', () => {
    expect(ROUTES).toContain({
      path: 'medico/:id',
      component: MedicoComponent,
    });
  });
});
