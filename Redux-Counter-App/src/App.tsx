
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './features/counter/counterSlice';
import type { RootState } from './store/store'

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.count);


  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <button onClick={() => dispatch(increment(10))}>Increment</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

    </div>
  )
}
