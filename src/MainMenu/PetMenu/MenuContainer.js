import MenuElements from './MenuElements';
import MenuTitle from '../MenuTitle';
import Logotype from '../Logotype';
import React from 'react';

export default function MenuContainer() {
    return (
        <div id="menu-container">
            <Logotype/>
            <MenuTitle title="Menu"/>
            <MenuElements/>
        </div>
    );
}
