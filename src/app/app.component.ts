import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './servico/authentication.service';
import { UserauthService } from './servico/userauth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  tipoPerfil = "Usuário";
  public appPages = [
    { title: 'Início', url: '/inicio/inicio', icon: 'home' },
    { title: 'Perfil', url: '/perfil/perfil', icon: 'person' },
    { title: 'Sair', url: '/folder/Sair', icon: 'exit' }
  ];

  email: string
  idRouter = null;

  @Input() id = "";

  constructor(
    //private autenticacao: AuthenticationService
    private userauth: UserauthService,
    private activeRouter: ActivatedRoute
  ) {}


  ngOnInit(): void {
   //this.autenticacao.getAuth().user.subscribe(user => {this.email = user.email});
   this.idRouter = this.activeRouter.snapshot.params['id'];

   console.log(this.idRouter);

  }
}


