import React, { Component } from 'react'
import "./CardLayout.css";
import { Card } from "react-bootstrap";
import image from './painting.jpg'
// import Footer from '../Footer';

export class Cards extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <Card style={{ width: '18rem' }} key={this.props.index} className="box hoverable">
            <img src={image} width="50%" height="50%" className="img_card"></img> 
            <Card.Body className="body_style">
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.props.artist}</Card.Subtitle>
                <Card.Text>
                    {this.props.desc}
                </Card.Text>
                <Card.Text>
                    {this.props.currency} {this.props.price}
                </Card.Text>
                <div className="options">
                    <div><i class="far fa-thumbs-up"></i></div>
                    <div><i className="options" class="far fa-heart"></i></div>
                </div>
                <div>
                {this.props.cart ? <button type="button" class="btn btn-dark" style={{width:'100%'}}>Add to Wishlist</button> : <button type="button" class="btn btn-dark" style={{width:'100%'}}>Add to Cart</button>}
                </div>
            </Card.Body>
        </Card>
     
        
        )
    }
}

export default Cards