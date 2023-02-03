import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public inicio!: string;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    ) { }

  ngOnInit() {
    this.inicio = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
