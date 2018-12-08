import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {
  collection: any[];
  constructor(db: AngularFireDatabase) {
    //   db.list('/collection')
    //     .snapshotChanges()
    //     .pipe(
    //       map(actions => actions.map(a => ({ key: a.key, ...a.payload.val() })))
    //     )
    //     .subscribe(items => {
    //       return items.map(item => item.key);
    //     });
    // }
  }
}
