import React from 'react';
import ComponentA from '../../components/component-second/ComponentA';
import ComponentB from '../../components/component-second/ComponentB';
import { Provider } from './store/Provider';

const ContainerSecond = () => {
    return (
        <Provider>
            <h1>With React Tracked</h1>
            <ComponentA />
            <ComponentB />
        </Provider>
    );
};

export default ContainerSecond;
