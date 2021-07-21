import React from 'react';
import {friends, homePage, names} from "../utils/constants";
import Friend from "./Friend";


const Friends = (props) => {
    const temp = names.filter(item => item !== props.hero)
    return (
        <section className="float-right w-50 row border border-light no-gutters">
            <h3 className="col-12 text-center">Friends</h3>
            {temp.map((item, index) => <Friend changeHero={props.changeHero} friend={item} key={index}/>)}
        </section>
    );

};

export default Friends;
