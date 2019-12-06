import * as TutorialActions from '../actions/tutorial.action';
import { Tutorial } from '../models/tutorial.mode';




const initialState: Tutorial = {
    name: 'test',
    url: 'http://google.com'
};

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

    switch (action.type) {
            case TutorialActions.ADD_TUTORUAL:
                return[...state, action.payload];

                case TutorialActions.REMOVE_TUTORUAL:
                    state.splice(action.payload, 1);
                    return state;
            default:
                return state;
    }
}
