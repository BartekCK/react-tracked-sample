import React from 'react';
import ContextFirst from '../../containers/container-first/store/context';
import { setAppLoading } from '../../common/actions';

const ComponentA = () => {
    const { state, dispatch } = React.useContext(ContextFirst);

    const { isLoading } = state;

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

export default React.memo(ComponentA);
