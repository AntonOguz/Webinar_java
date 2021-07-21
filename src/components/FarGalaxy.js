import React, {Component} from 'react';

class FarGalaxy extends Component
{
    constructor(props) {
        super(props);
        this.state =
            {
                isLoading: true
            }
    }

    componentDidMount()
    {
        const opening_crawl = sessionStorage.getItem('opening_crawl')
        if(opening_crawl)
        {
            this.setState(
                {
                    isLoading : false,
                    opening_crawl : opening_crawl
                }
            )
        }
        else
        {
            let episode = Math.floor(Math.random()*6)+1
            fetch(`https://sw-info-api.herokuapp.com/v1/films/${episode}`)
                .then(response => response.json())
                .then(data =>
                {
                    this.setState(
                        {
                            isLoading : false,
                            opening_crawl : data.opening_crawl
                        }
                    )
                    sessionStorage.setItem('opening_crawl', data.opening_crawl)
                })
        }
}

    render() {
        return (
            <p className="text-justify">
                {this.state.isLoading ? 'Loading.....' : this.state.opening_crawl}
            </p>
        );
    }
}

export default FarGalaxy;
