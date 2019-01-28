import React from "react";
import axios from 'axios';
import { Section, Columns } from 'bloomer';
import ItemCard from '../ItemCard';

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
            <div>
                <Section>
                    <div>
                        <Columns isCentered className='is-multiline'>
                            {this.state.items.map(item => (
                                <ItemCard 
                                    key = {item.listing_id}
                                    id = {item.listing_id}
                                    title = {item.title}
                                    price = {item.price}
                                    link = {item.url}
                                    description = {item.description}
                                />
                            ))}
                        </Columns>
                    </div>
                </Section>
            </div>
        )
    }
}

export default Store;