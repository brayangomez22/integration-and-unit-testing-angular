import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [],
})
export class MedicoComponent implements OnInit {
  public medicos: any[] = [];

  constructor(public _medicoService: MedicoService) {}

  ngOnInit(): void {}

  hiMedico(name: string) {
    return `Hi ${name}`;
  }

  getMedicos() {
    return this._medicoService
      .getMedicos()
      .subscribe((medicos: any) => (this.medicos = medicos));
  }
}
