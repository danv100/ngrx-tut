import { Tutorial } from "../models/tutorial.model";
import * as TutorialActions from "../actions/tutorial.actions";
import { createReducer, on } from "@ngrx/store";

export interface TutorialState {
  tutorials: Tutorial[];
}

const initialState: TutorialState = {
  tutorials: [
    {
      name: 'Initial Tutorial',
      url: 'http://google.com'
    }
  ]
};

export const reducer = createReducer(
  initialState,
  on(
    TutorialActions.AddTutorial,
    (state, { tutorial }) => ({
      ...state,
      tutorials: [
        ...state.tutorials,
        tutorial
      ]
    })
  )
);
