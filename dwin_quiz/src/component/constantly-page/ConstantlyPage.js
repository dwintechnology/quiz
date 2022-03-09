import React from "react"
import Body from './body/Body';
import './ConstantlyPage.scss';
import MenuBlock from './menu-block/Menu-block';
import TitleBlock from './title-block/Title-block';

export default function ConstantlyPage() {
    return (
        <div className='ConstantlyPage'>
            <TitleBlock />
            <div className='Body'>
                <MenuBlock />
                <Body />
            </div>
        </div>
    );
}