import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";

export const rootReducer = combineReducers({
  cards: cardReducer
})
