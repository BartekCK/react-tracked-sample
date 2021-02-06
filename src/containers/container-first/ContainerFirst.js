import React from 'react';
import ProviderFirst from './store/Provider';
import ComponentA from '../../components/component-first/ComponentA';
import ComponentB from '../../components/component-first/ComponentB';

const ContainerFirst = () => {
    return (
        <ProviderFirst>
            <h1>With React Context</h1>
            <ComponentA />
            <ComponentB />
        </ProviderFirst>
    );
};

export default ContainerFirst;
