import React from 'react';

import { createContainer } from 'react-tracked';
import reducerSecond from './reducerSecond';

export const initValue = {
    isLoading: false,
    isTouched: false,
};

const useValue = () => React.useReducer(reducerSecond, initValue);

export const { Provider, useTrackedState, useUpdate: useDispatch } = createContainer(useValue);
