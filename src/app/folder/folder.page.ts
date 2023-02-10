import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../servico/authentication.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public inicio!: string;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private authetication: AuthenticationService,
    private route: Router
    ) { }

  ngOnInit() {
    /* this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.inicio = this.activatedRoute.snapshot.paramMap.get('id') as string; */
    if(this.authetication.logoutUser()){
      this.route.navigate([''], {replaceUrl: true});
    };
  }

}
