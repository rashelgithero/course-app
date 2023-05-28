import React, { useState } from 'react';
import Data from '../../data/data.json'
import Production from '../Production/Production';
import './Courses.css';
import Card from '../Card/Card';
import Header from '../Header/Header';


const Courses = () => {
    const [cart, setCart] = useState([]);
    const handleClick = (course) => {
        const newCart = [...cart, course]
        setCart(newCart);
    }
   
    return (
        <div>
            {
                <Header></Header>
            }
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
                    <br />
                </div>
            </div>
        </div>
        
    );
};

export default Courses;