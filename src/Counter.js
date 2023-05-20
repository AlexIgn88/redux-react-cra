import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import { selectCount } from './selectors';

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return <fieldset>
    <button onClick={() => dispatch(increment())}> + </button>
    <span>{count}</span>
    <button onClick={() => dispatch(decrement())}> - </button>
  </fieldset>;
}