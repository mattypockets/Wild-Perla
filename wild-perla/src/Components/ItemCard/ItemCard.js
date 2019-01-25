import React from "react";
import axios from 'axios';
import { Image } from 'bloomer';

class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            imgData: [{ }],
            test: "This is a test"
        };
    }

    

    

    componentDidMount() {
        const api_key = process.env.REACT_APP_API_KEY;
        const id = this.props.id;
        axios.get('https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/listings/'+id+'/images/?api_key='+api_key)
            .then(res=> {
                const imgData = res.data.results;
                this.setState({imgData})
                console.log("done")
                console.log(imgData)
            })
    }

    

    render() {
        return(
            <div>
                <Image isRatio='4:3' src={this.state.imgData[0].url_fullxfull} />
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default ItemCard;