import { combineReducers } from 'redux';
import todoAction from './todo'
const combineReduced = combineReducers({
    todo: todoAction
});

export default  combineReduced;