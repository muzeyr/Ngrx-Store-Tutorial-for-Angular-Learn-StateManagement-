import { Action } from '@ngrx/store';
import { Tutorial } from 'src/app/models/tutorial.mode';


export const ADD_TUTORUAL = '[TUTORUAL] Add';
export const REMOVE_TUTORUAL = '[TUTORUAL] Remove';

export class AddTutorial implements Action {
    readonly type = ADD_TUTORUAL;

    constructor(public payload: Tutorial) {

    }
}
export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORUAL;

    constructor(public payload: number) {

    }
}

export type Actions = AddTutorial | RemoveTutorial;

