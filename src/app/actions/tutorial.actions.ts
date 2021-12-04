import { createAction, props } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.model";

export const AddTutorial = createAction(
  '[TUTORIAL] Add',
  props<{ tutorial: Tutorial }>()
);

export const RemoveTutorial = createAction(
  '[TUTORIAL] Remove',
  props<{ x: number }>()
);