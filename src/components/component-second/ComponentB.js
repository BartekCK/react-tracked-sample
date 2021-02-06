import React from 'react';
import { setAppTouched } from '../../common/actions';
import { useDispatch, useTrackedState } from '../../containers/container-second/store/Provider';

const ComponentB = () => {
    const { isTouched } = useTrackedState();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setAppTouched(!isTouched));
    };

    return (
        <div className="component">
            <h2>ComponentB</h2>
            <span>Random Number{Math.random()}</span>
            <span>Is Touched ??? {isTouched ? 'YES' : 'NO'}</span>
            <button onClick={handleClick}>Click to change touched</button>
        </div>
    );
};

export default ComponentB;
