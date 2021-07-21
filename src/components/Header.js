import React from 'react';
import Navigator from "./Navigator";
import {friends} from "../utils/constants";

const Header = (props) =>
{
    return (
        <header className="rounded-top">
            <Navigator hero={props.hero}/>
            <h1 className="text-center pt-5 pb-3">{friends[props.hero].name}</h1>
        </header>
    );
};

export default Header;
