import { from, throwError, Observable, empty } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  const servicio = new MedicosService(null as any);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Init: Debe de cargar los médicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];

    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });

    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe llamar al servidor para agregar un médico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(
      () => new Observable()
    );

    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();
  });

  it('Debe de agregar un nuevo médico al arreglo de médicos', () => {
    const medico = { id: 1, nombre: 'Brayan' };

    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

    componente.agregarMedico();

    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('If the edit fails, the property of the messageErrror must be equal to the error of the service', () => {
    const myError = 'Could not add doctor';

    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(myError));

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(myError);
  });

  it('You must call the server to remove a doctor', () => {
    spyOn(window, 'confirm').and.returnValue(true);

    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());

    componente.borrarMedico('1');

    expect(espia).toHaveBeenCalledWith('1');
  });

  it('You should not call the server to remove a doctor', () => {
    spyOn(window, 'confirm').and.returnValue(false);

    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());

    componente.borrarMedico('1');

    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
