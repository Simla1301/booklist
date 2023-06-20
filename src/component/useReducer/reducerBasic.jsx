import React ,{useReducer} from 'react'

const initialState = {
    count: 0,
};

const reducer = (state = initialState, action) => {
    if(action.type === 'increment'){
        return{count: state.count + 1}
    }
    else if(action.type === 'decrement'){
        return{count: state.count - 1}
    }
    else{
        throw new Error('unknown action type');
    }
};

const ReducerBasic = () => {
    const [state, dispatch] = useReducer(reducer,initialState);

    const handleIncrement = () => {
        dispatch({type: 'increment'});
    };
     const handleDecrement =() => {
        dispatch({type: 'decrement'});
     };
  return (
    <div>
      <p>count: {state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Increment</button>
    </div>
  )
}

export default ReducerBasic
