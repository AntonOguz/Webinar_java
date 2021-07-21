import React from 'react';
import {friends, homePage} from "../utils/constants";
import {Link} from "react-router-dom";

const Friend = (props) => {
    return (
        <Link className="col-4 p-1" to={`/${homePage}/${props.friend}`}>
            <img
                src={friends[props.friend].img}
                alt={friends[props.friend].name}
            onClick={()=> props.changeHero(props.friend)} className={'w-100'}/>
        </Link>
    );
};

export default Friend;
