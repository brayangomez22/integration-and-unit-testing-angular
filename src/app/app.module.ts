import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermediate/spies/medicos.component';
import { MedicoComponent } from './intermediateTwo/medico/medico.component';
import { HospitalComponent } from './intermediateTwo/hospital/hospital.component';
import { IncrementadorComponent } from './intermediateTwo/incrementer/incrementador.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
