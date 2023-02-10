import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DisableSideMenu } from '../custom-decorator/disable-side-menu.decorator';
import { AuthenticationService } from 'src/app/servico/authentication.service'
import { UserauthService } from '../servico/userauth.service';

@DisableSideMenu()
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  tipoPerfil = "Usuário";
  nameButton = "Logar";
  form: FormGroup
  users: any[] = []; 

  constructor(
    //private authentication: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userauth: UserauthService
    ) {}

  ngOnInit() {
    this.userauth.consulta().subscribe(results => {
      this.users = results
      //console.log(this.users);
    
    
    });
    this.validaForm();
  }

  validaForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  mudarPerfil() {
    this.tipoPerfil = "Admin";
  }
  mudarPerfil2() {
    this.tipoPerfil = "Usuário"; 
  }

  login() {
    for(let i = 0; i < this.users.length; i++){
      if (this.tipoPerfil == 'Usuário' && this.form.value.email == this.users[i].email && this.form.value.password == this.users[i].password) {
        this.router.navigate(['inicio/', this.users[i].id], {replaceUrl: true});
      }else
       if (this.tipoPerfil == 'Admin' && this.form.value.email == this.users[i].email && this.form.value.password == this.users[i].password) { 
        this.router.navigate(['admin/', this.users[i].id], {replaceUrl: true});
      } else { 
        console.log('Usuario não encontrado!');
      }
    }
  }
}
