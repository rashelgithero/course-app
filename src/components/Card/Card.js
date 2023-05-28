import React from 'react';
import './Card.css'
const Card = (props) => {
    const card = props.cart;
    const total = card.reduce((total, card)=>(total+ card.price),0);
    const offer = total*5 / 100;
    const getNumber = (num) => (Number(num));
    return (
        <div className='carder'>
            <h3>Order Summary</h3>
            <h5><span className='money'>Order List:</span>{card.length}</h5>
            <h5><span className='money'>Price:</span>{getNumber(total)}</h5>
            <h5><span className='money'>Offer:</span>{offer}</h5>
            <h5><span id='total' className='money'>Total Price:</span>{total - offer}</h5>
        </div>

    );
};

export default Card;