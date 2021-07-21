import './App.css';
import React, {Component} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {defaultHero, homePage} from "./utils/constants";
import {SWContext} from "./utils/SWContext";

class App extends Component
{
    constructor(props) {
        super(props);
        this.state =
            {
                hero: defaultHero

            }
    }

    changeHero = hero =>
    {
        this.setState({hero})
    }

    componentDidMount() {
        console.log('Component App did mount')
    }


    render() {
        return (
            <div className="container-fluid">

                    <Header hero={this.state.hero}/>
                    <Main changeHero={this.changeHero}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
