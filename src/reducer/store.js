import { createStore } from "redux";
import { reducer } from "./reducer";

{
  /* Store */
}

export let store = createStore(reducer);
