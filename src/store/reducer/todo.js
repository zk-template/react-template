import { ACTION_TYPE, initDefaultStore } from '../actions/types_and_initval';
const todoAction = (state = initDefaultStore, actions) => {
    switch(actions.type) {
        case ACTION_TYPE:
            return actions.payload;
        default:
            return state;
    }
}
export default  todoAction;