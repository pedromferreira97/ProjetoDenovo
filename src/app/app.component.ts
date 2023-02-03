import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/inicio/inicio', icon: 'home' },
    { title: 'Perfil', url: '/perfil/perfil', icon: 'person' },
    { title: 'Sair', url: '/folder/Sair', icon: 'exit' }
  ];
  constructor() {}
}
