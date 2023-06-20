import React, { useReducer } from 'react'
import Reducer from './reducer';
import {data} from '../../data/data'
import { CLEAR_LIST, MULTI_ITEM, REMOVE_ITEM, RESET_LIST } from './actions';

const initialState = {
  people: data,
};
const UseReducerHook = () => {
    const [state ,dispatch] = useReducer(Reducer, initialState )

    const clearList= () => {
      dispatch({type: CLEAR_LIST});
    };

    const resetList = () => {
      dispatch({type: RESET_LIST});
    };

    const removeItem = (id) =>{
      dispatch({type: REMOVE_ITEM , payload: {id}});
    };
    
    const multiItems =(id) => {
      dispatch({type: MULTI_ITEM ,payload: {id}});
    }

  return (
    <div>
      {state.people.map((person) => {
        const {id ,name} = person;
        return (
            <div key={id} className='item'>
             <h4>{name}</h4>
             <button onClick={() => removeItem(id)}>remove</button>
            </div>
        )
      })}
      {state.people.length < 1 ? (
        <button onClick={resetList} style={{marginTop:'2rem'}} className='btn'>reset</button>
      ):(
        <button onClick={clearList} style={{marginTop:'2rem'}} className='btn'>clear</button>
        
      )}
      <button onClick={multiItems} style={{marginTop:'2rem'}} className='btn'>delete multi items</button>
    </div>
  )
}

export default UseReducerHook 
