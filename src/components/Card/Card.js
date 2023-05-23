import React from 'react';
import './Card.css'
const Card = (props) => {
    const card = props.cart;
    const total = card.reduce((total, card)=>(total+ card.price),0);
    const offer = total*5 / 100;
    const getNumber = (num) => (Number(num));
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Order List:{card.length}</h4>
            <h4>Price:{getNumber(total)}</h4>
            <h4>Offer: {offer}</h4>
            <h3>Total Price: {total - offer}</h3>
        </div>

    );
};

export default Card;