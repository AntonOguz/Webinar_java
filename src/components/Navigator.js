import React from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import {SWContext} from "../utils/SWContext";
import {Link} from "react-router-dom";

const Navigator = (props) =>
{
    return (
        <SWContext.Consumer>{
            value => (

            <nav>
                <ul className="position-fixed top-5 list-unstyled d-inline">
                    <Link to={`/${homePage}/${props.hero}`}>
                        <li className="border border-light rounded-pill btn btn-danger">Home</li>
                    </Link>
                    <Link to={`/${aboutMePage}/${props.hero}`}>
                        <li className="border border-light rounded-pill btn btn-danger">About me</li>
                    </Link>
                    <Link to={`/${starWarsPage}`}>
                        <li className="border border-light rounded-pill btn btn-danger">Star wars</li>
                    </Link>
                    <Link to={`/${contactPage}`}>
                        <li className="border border-light rounded-pill btn btn-danger">Contact</li>
                    </Link>
                </ul>
            </nav>)}
        </SWContext.Consumer>
    );
};

export default Navigator;
