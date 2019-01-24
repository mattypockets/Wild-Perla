import React from "react";
import axios from 'axios';

class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        axios.get('https://openapi.etsy.com/v2/shops/WildPerla/listings/active?api_key=7aqood14ck041vywdymjg35w')
            .then(res=> {
                const items = res.data.results;
                this.setState({items})
                console.log("done")
            })
        
    }

    render() {
        return(
        <ul>
            {this.state.items.map(item=> (
                <li key={item.title}>
                    {item.title}
                </li>
            ))}
        </ul>
        )
    }
}

export default Store;