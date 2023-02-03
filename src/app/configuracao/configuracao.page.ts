import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  form!: FormGroup;

  constructor(
    private firebase: FirebaseService,

    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.validaForm();
  }


  /* this.firebase.cadastro(item); */

  validaForm(){
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      cpf: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      estado: ['', [Validators.required]],
      regiao: ['', [Validators.required]],
      sala: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
      descricao: ['', [Validators.required]]

    })
  }


  cadastrar():void{
    this.firebase.cadastro(this.form.value);
    //console.log(this.form.value);
  }
}
