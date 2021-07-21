import React from 'react';
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import Home from "./Home";
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import {SWContext} from "../utils/SWContext";
import {Switch, Route} from 'react-router-dom'
import ErrorPage from "./ErrorPage";

const Main = (props) =>
{
    return (
        <Switch>
            <Route path={['/',`/${homePage}`, `/${homePage}/:hero`]} exact render={routProps =>
                <Home{...routProps} changeHero={props.changeHero}/>}/>
            <Route path={[`/${aboutMePage}/:hero`]} exact render={routeProps =>
                <AboutMe changeHero={props.changeHero}{...routeProps}/>}/>
            {/*/!*1 with render.*/}
            {/*  <Route path={[`/${aboutMePage}/:hero`]} exact render={routeProps =>*/}
            {/*    <AboutMe changeHero={props.changeHero}{...routeProps}/>}/>*/}
            {/*2 with render. <Route path={[`/${aboutMePage}/:hero`]} exact render={routeProps =>*/}
            {/*    <AboutMe match={routeProps.match}/>}/>*/}
            <Route path={[`/${starWarsPage}`, `/${starWarsPage}/:hero`]} exact component={StarWars}/>
            <Route path={[`/${contactPage}`, `/${contactPage}/:hero`]} exact component={Contact}/>
            <Route component={ErrorPage}/>
        </Switch>
    )
};

export default Main;


// import React from 'react';
// import AboutMe from "./AboutMe";
// import StarWars from "./StarWars";
// import Contact from "./Contact";
// import Home from "./Home";
// import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
// import {Switch, Route} from 'react-router-dom'
// import ErrorPage from "./ErrorPage";
//
// const Main = (props) =>
// {
//     return (
//         <Switch>
//             <Route path={['/', `/${homePage}`, `/${homePage}/:hero`]} exact render={routProps =>
//                 <Home{...routProps} changeHero={props.changeHero}/>}/>
//             <Route path={[`/${aboutMePage}/:hero`]} exact render={routeProps =>
//                 <AboutMe changeHero={props.changeHero}{...routeProps}/>}/>
//             <Route path={[`/${starWarsPage}`, `/${starWarsPage}/:hero`]} exact component={StarWars}/>
//             <Route path={[`/${contactPage}`, `/${contactPage}/:hero`]} exact component={Contact}/>
//             <Route component={ErrorPage}/>
//         </Switch>
//     )
//
// };
//
// export default Main;
