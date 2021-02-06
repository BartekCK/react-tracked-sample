import React from 'react';
import { useDispatch, useTrackedState } from '../../containers/container-second/store/Provider';
import { setAppLoading } from '../../common/actions';

const ComponentA = () => {
    const { isLoading } = useTrackedState();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setAppLoading(!isLoading));
    };

    return (
        <div className="component">
            <h2>ComponentA</h2>
            <span>Random Number{Math.random()}</span>
            <span>Is Loading ??? {isLoading ? 'YES' : 'NO'}</span>
            <button onClick={handleClick}>Click to change loading</button>
        </div>
    );
};

export default ComponentA;
