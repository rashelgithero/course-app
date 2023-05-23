import React, { useState } from 'react';
import Data from '../../data/data.json'
import Production from '../Production/Production';
import './Courses.css';
import Card from '../Card/Card';


const Courses = () => {
    const [cart, setCart] = useState([]);
    const handleClick = (course) => {
        const newCart = [...cart, course]
        setCart(newCart);
        console.log(newCart);
    }
   
    return (
        <div className='course'>
            <div className='course-area'>
                {
                    Data.map((data, i) => (
                        <div key={i}>
                            <Production course ={data} handleClick ={handleClick}></Production>
                        </div>
                    ))
                    
                }
            </div>

            <div className='enroll-area'>
                <Card cart ={cart}></Card>
            </div>
            
        </div>
        
    );
};

export default Courses;