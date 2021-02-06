import { SET_LOADING, SET_TOUCHED } from './types';

export const setAppLoading = (isLoading) => ({
    type: SET_LOADING,
    payload: {
        isLoading,
    },
});

export const setAppTouched = (isTouched) => ({
    type: SET_TOUCHED,
    payload: {
        isTouched,
    },
});
