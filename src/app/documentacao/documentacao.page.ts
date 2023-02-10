import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebasec.service';

@Component({
  selector: 'app-documentacao',
  templateUrl: './documentacao.page.html',
  styleUrls: ['./documentacao.page.scss'],
})
export class DocumentacaoPage implements OnInit {

  constructor(
    private firebase: FirebaseService,
  ) { }

  ngOnInit() {
  }

}
