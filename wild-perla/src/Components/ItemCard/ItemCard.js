import React from "react";
import axios from 'axios';
import { Column, Card, CardImage, Image, CardContent, Content } from 'bloomer';
import './ItemCard.css'

class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            imgData: [{ }],
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

        <Column isSize='1/4'>
            <Card className="itemCard">
                    
                <CardImage>
                    <a href={ this.props.link } target="_blank"><Image isRatio='4:3' src={ this.state.imgData[0].url_fullxfull } /></a>
                </CardImage>
    
                <CardContent>
                    <Content>
                        <a href={ this.props.link } target="_blank"><span dangerouslySetInnerHTML={{ __html: this.props.title}}></span></a>
                        <p>${ this.props.price }</p>
                   </Content>
                </CardContent>
            </Card>
        </Column>
    
        )
    }
}

export default ItemCard;