import React from 'react';
import hero from '../images/main.jpg'
import {friends} from "../utils/constants";

const Hero = (props) => {
    return (
        <section className="float-left w-25 mr-1 row">
            <img className="col-12" src={friends[props.hero].img} alt={friends[props.hero].name}/>
        </section>
    );
};

export default Hero;
