import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import 'rxjs/add/operator/map';
import {Category} from "../interfaces/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFirestore) { }

  getAll()
  {
    return this.db.collection('categoryList').snapshotChanges().map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Category;
      const id = a.payload.doc.id;
      return { id, ...data };
    }));
  }

}
