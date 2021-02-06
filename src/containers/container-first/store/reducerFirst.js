import {SET_LOADING, SET_TOUCHED} from "./types";

const reducerFirst = (state, action) => {
    const {isLoading, isTouched} = action.payload;
    switch (action.type){
        case SET_LOADING:
            return {...state, isLoading }
        case SET_TOUCHED:
            return {...state, isTouched }
        default:
            return state;
    }
}

export default reducerFirst;