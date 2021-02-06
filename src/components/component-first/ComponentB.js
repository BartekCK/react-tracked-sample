import React from 'react';
import ContextFirst from '../../containers/container-first/store/context';
import { setAppTouched } from '../../common/actions';

const ComponentB = () => {
    const { state, dispatch } = React.useContext(ContextFirst);

    const { isTouched } = state;

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

export default React.memo(ComponentB);
