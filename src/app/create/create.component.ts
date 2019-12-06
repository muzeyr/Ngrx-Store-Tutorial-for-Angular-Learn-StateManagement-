import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as TutorialActions from '../actions/tutorial.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit() {
  }
  addTutorial(name: string, url: string) {
    this.store.dispatch(new TutorialActions.AddTutorial({ name, url }));

  }

}
