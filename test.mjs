import { decrement, increment } from "./src/actions.js";
import { store } from "./src/store.js";

store.subscribe(() => console.log(store.getState()));
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());