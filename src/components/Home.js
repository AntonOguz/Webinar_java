import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import {defaultHero, names} from "../utils/constants";
import React, {Component} from 'react';

class Home extends Component {

    componentDidMount() {
        let key = this.props.match.params.hero
        if(!names.includes(key))
            key = defaultHero
        this.props.changeHero(key)
    }

    render() {
        let key = this.props.match.params.hero
        if(!names.includes(key))
            key = defaultHero
        return (
            <main className="clearfix">
                <Hero hero={key}/>
                <Friends hero={key} changeHero={this.props.changeHero}/>
                <FarGalaxy/>
            </main>
        );
    }
}

export default Home;