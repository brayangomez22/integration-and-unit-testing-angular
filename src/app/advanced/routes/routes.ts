import { Routes } from '@angular/router';
import { HospitalComponent } from '../../intermediateTwo/hospital/hospital.component';
import { MedicoComponent } from '../../intermediateTwo/medico/medico.component';
import { IncrementadorComponent } from '../../intermediateTwo/incrementer/incrementador.component';

export const ROUTES: Routes = [
  { path: 'hospital', component: HospitalComponent },
  { path: 'medico/:id', component: MedicoComponent },
  { path: '**', component: IncrementadorComponent },
];
