import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DisableSideMenu } from '../custom/disable-side-menu.decorator';
import { AuthenticationService } from 'src/app/servico/authentication.service'
import { UserauthService } from '../servico/userauth.service';

@DisableSideMenu()
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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

  


  logar(){

    for(let i = 0; i < this.users.length; i++){

      if(this.form.value.email == this.users[i].email ){        
        this.router.navigate(['inicio/', this.users[i].id]);
      }else{
        console.log('Usuario não encontrado!');
      }
    }
  
  }

  validaForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }


}
