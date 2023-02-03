import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-reparo',
  templateUrl: './reparo.page.html',
  styleUrls: ['./reparo.page.scss'],
})
export class ReparoPage implements OnInit {
  public reparo!: string;
  constructor(private activatedRoute: ActivatedRoute,
  private firebase: FirebaseService,) { }

  ngOnInit() {
    this.reparo = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
