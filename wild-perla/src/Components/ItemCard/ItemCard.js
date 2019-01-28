import React from "react";
import axios from 'axios';
import { Column, Card, CardHeader, CardHeaderTitle, Title, CardImage, Image, CardContent, Content } from 'bloomer';

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
            <Card>
                <CardHeader>
                    <CardHeaderTitle>
                        <Title><span className="header" href={ this.props.link }>{ this.props.title }</span></Title>
                    </CardHeaderTitle>
                </CardHeader>
    
                <CardImage>
                    <Image isRatio='4:3' src={ this.state.imgData[0].url_fullxfull } />
                </CardImage>
    
                <CardContent>
                    <Content>
                        <p>Price: <span>&#36</span> { this.props.price }</p>
                        <p>{ this.props.description }</p>
                   </Content>
                </CardContent>
            </Card>
        </Column>
    
        )
    }
}

export default ItemCard;