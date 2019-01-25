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
        const api_key = process.env.REACT_APP_API_KEY;
        axios.get('https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/shops/WildPerla/listings/active?api_key='+api_key)
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
                <div>
                <li>
                    {item.title}
                </li>
                <li>
                    <p>{item.description}</p>
                </li>
                <li>
                    <a href={item.url}>Link</a>
                </li>
                </div>
            ))}
        </ul>
        )
    }
}

export default Store;