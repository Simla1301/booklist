import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM, MULTI_ITEM} from './actions'
import {data} from '../../data/data'

const Reducer = (state,action) => {
    if(action.type === CLEAR_LIST) {
        return{ ...state, people: []};
    }
    if(action.type === RESET_LIST) {
        return {...state, people: data};
    }
    if(action.type === REMOVE_ITEM) {
        let newPeople = state.people.filter(
            (person) => person.id != action.payload.id
        );
        return{...state ,people: newPeople};
    }
    if(action.type === MULTI_ITEM){
        let newPeople = state.people.slice(2);
        console.log('hii')
        return{...state, people: newPeople}
    }
    throw new Error(`no matching "${action.type}" - action type`);

};

export default Reducer
