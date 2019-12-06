import { Component, OnInit } from '@angular/core';
import { Observer, Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.mode';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as TutorialActions from '../actions/tutorial.action';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;

  constructor(private readonly store: Store<AppState>) {
    this.tutorials = store.select('tutorial');


  }

  public ngOnInit() {
  }
  public delTutorial(index: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
    alert(index);
  }

}
