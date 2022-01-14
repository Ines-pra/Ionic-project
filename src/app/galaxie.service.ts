/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Galaxie } from './models/galaxie.model';

@Injectable({
  providedIn: 'root'
})
export class GalaxieService {
  private dbPath = '/galaxies';
  galaxiesRef: AngularFirestoreCollection<Galaxie>;

  constructor(
    private db: AngularFirestore
  ) {
    this.galaxiesRef = db.collection(this.dbPath);
   }

   getAllGalaxie(): any{
    return this.galaxiesRef.snapshotChanges().pipe(
      map((changes: any) => changes.map((doc: any) => ({id: doc.payload.doc.id, ...doc.payload.doc.data()})))
    );
  }

   saveNewGalaxie(galaxie: Galaxie): any {
    return new Observable(obs => {
      this.galaxiesRef.add({...galaxie}).then(() => {
        obs.next();
      });
    });
   }

   get(id: any): any{
    return new Observable(obs => {
      this.galaxiesRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
   }

   update(galaxie: Galaxie) {
    return new Observable(obs => {
      this.galaxiesRef.doc(galaxie.id).update(galaxie);
      obs.next();
    });
   }

   delete(id: any) {
    this.db.doc(`galaxies/${id}`).delete();
   }
}
