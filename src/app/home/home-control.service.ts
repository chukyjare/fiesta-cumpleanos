import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class HomeControlService {
  public ejemploForm: FormGroup;
  validationMessages = new Map<string, Map<string, string>>();
  constructor() {
    this.validationMessages.set('nombreEntrada', this.getTemporalMap('Ni números ni carácteres especiales'));
    this.validationMessages.set('pseudoEntrada', this.getTemporalMap('Los Pseudónimos no llevan espacios'));
    this.validationMessages.set('edadMinima', this.getTemporalMap('Número entre 18 y 120'));
    this.validationMessages.set('estiloMusical', this.getTemporalMap('[bachata, rock, hardrock,folk]'));
    console.log(this.validationMessages);
    
    this.ejemploForm = new FormGroup({
      nombreEntrada: new FormControl('', Validators.pattern('^[a-zA-ZñÑáÁéÉíÍóÓúÚ]+[\ |-]?[A-zA-ZñÑáÁéÉíÍóÓúÚ]+[\ |-]?([A-zA-ZñÑáÁéÉíÍóÓúÚ]+[\s|-]?)+$')),
      pseudoEntrada: new FormControl('', Validators.pattern('^[\.0-9a-zA-ZñÑáÁéÉíÍóÓúÚ@-]+$')),
      edadMinima: new FormControl('',[
        Validators.min(18),
        Validators.max(120),
        Validators.pattern('^[0-9]+$')
      ]),
      estiloMusical:new FormControl('',Validators.pattern('[bB][aA][cC][hH][aA][tT][aA]|[rR][oO][cC][kK]|[hH][aA][rR][dD][rR][oO][cC][kK]|[fF][oO][lL][kK]'))
    });
  }
  getErrorMessage(control, error:ValidationErrors) {
   return this.validationMessages.get(control).get(Object.keys(error)[0]);
  }

  getTemporalMap(message:string): Map<string,string>{
    let mapaTemporal = new Map<string,string>();
    mapaTemporal.set('pattern',message);
    return mapaTemporal;
  }
}
