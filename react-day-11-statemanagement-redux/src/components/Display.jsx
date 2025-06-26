import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from '../redux/action';

function Display() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Display