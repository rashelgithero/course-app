import React from 'react';
import './Production.css';
import { Button } from 'react-bootstrap';


const Production = (props) => {
    const { name, img, category, enrolled, price } = props.course;
    
    return (
        <div className='production'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='textPart'>
                <h3>{name} <small>with best teachers and best instructions. </small></h3>
                <br />
                <br />
                <h5><small>Category : {category}</small></h5>
                <h5><small >Enrolled: <span id='price'>{enrolled}+</span></small></h5>
                
            </div>
            <div className='buy'>
                <h5>Price:{price}/-</h5>
                <Button variant="success" onClick={()=> (props.handleClick(props.course))}><small>Buy Now</small></Button>
            </div>
        </div>
    );
};

export default Production;