import { HomeControlService } from './home-control.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Validacion } from '../core/model/validacion';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  ejemploForm: FormGroup;
  validationMessages;
  nombre: string;
  pseudonimo: string;
  edad:number
  estiloMusical:string;
  
  
  constructor(private homeControlService: HomeControlService) {
    this.ejemploForm = this.homeControlService.ejemploForm;
    this.validationMessages = this.homeControlService.validationMessages;
  }
  getErrorMessage(control, error) {
    return this.homeControlService.getErrorMessage(control, error);
  }
  
}
