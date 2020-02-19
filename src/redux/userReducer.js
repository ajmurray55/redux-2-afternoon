import axios from 'axios'

const initalState = {
    email: null,
    firstName: null,
    lastName: null
};

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export function requestUserData(){
    let data = axios.get('/auth/user-data').then(res => res.data);
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}

export default function(state = initalState, action){
    switch(action.type){
        // case REQUEST_USER_DATA + '_PENDING':
        //     return {...state, loading: true}
        case REQUEST_USER_DATA + '_FULFILLED':
            const {email, firstName, lastName } = action.payload.user
            return {email, firstName, lastName}
        // case REQUEST_USER_DATA + '_REJECTED':
        //     return{...state, loading: false}
        default:
         return state
    }
}