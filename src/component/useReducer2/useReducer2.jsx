import React, { useReducer } from 'react'
import Reducer2 from '../useReducer2/reducer2';
import {data2} from '../../data/data2'
import { CLEAR_LIST, MULTI_ITEM, REMOVE_ITEM, RESET_LIST } from './actions2';

const initialState = {
  people: data2,
};
const UseReducer2 = () => {
    const [state ,dispatch] = useReducer(Reducer2, initialState )

    

    const removeItem = (id) =>{
      dispatch({type: REMOVE_ITEM , payload: {id}});
    };

    const editItem = () => {
      dispatch({})
    }
    
    const multiItems =(id) => {
      dispatch({type: MULTI_ITEM ,payload: {id}});
    }

  return (
    <div>
      {state.people.map((person) => {
        const {id ,name,email,number} = person;
        return (
            <div key={id} className='item'>
             <h4>{name}</h4>
             <h4>{email}</h4>
             <h4>{number}</h4>
             <button onClick={() => removeItem(id)}>delete contact</button>
             <button onClick={editItem}>edit contact</button>
            </div>
        )
      })}
      
      <button onClick={multiItems} style={{marginTop:'2rem'}} className='btn'>delete multi items</button>
    </div>
  )
}

export default UseReducer2 

