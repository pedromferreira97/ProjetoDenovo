import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userCollection: AngularFirestoreCollection;
  public perfil!: string;
  constructor(private activatedRoute: ActivatedRoute, private af: AngularFirestore) { 
    this.userCollection = this.af.collection('usuario');
  }

  ngOnInit() {
    this.perfil = this.activatedRoute.snapshot.paramMap.get('id') as string;
    
    
  }
  consulta(){
    return this.userCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })

      })
    )
  }
}
