import { ACTION_TYPE } from './types_and_initval';
const todo = payload => {
    return {
        type: ACTION_TYPE,
        payload
    }
}

const asyncToDo = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(todo('async actaaaaaion'));
        }, 2000);
    }
}

export { asyncToDo };