import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions.js';
import { selectCount } from './selectors.js';

// import { store } from "./store.js";

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return <fieldset>
    <button onClick={() => dispatch(increment())}> + </button>
    <span>{count}</span>
    <button onClick={() => dispatch(decrement())}> - </button>
  </fieldset>;
}

// store.subscribe(() => console.log(store.getState()));
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());