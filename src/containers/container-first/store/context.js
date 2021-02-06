import React from 'react';

export const initValue = {
    isLoading: false,
    isTouched: false,
};

const ContextFirst = React.createContext(initValue);

export default ContextFirst;
