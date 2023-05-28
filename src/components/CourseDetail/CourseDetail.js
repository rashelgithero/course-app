import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../data/data.json'


const CourseDetail = () => {
    const {key} = useParams();
    
    const [course, setCourse] = useState([]);
    

    useEffect(()=>{
        const crs = [key];
        const details = crs.map(key =>{
            const product = Data.find(pd => pd.key === key);
            return product;  
        })
        setCourse(details);
    }, [])
    
    return (
        <div>
            {
                course.map(product =>(
                    
                    <div key ={product.key}>
                        <h3>Name: {product.name}</h3>
                        <h3>Category: {product.category}</h3>
                        <h2>Enrolled: {product.enrolled}</h2>
                        <h2>Price:{product.price} </h2>
                        <img style={{height: '40px', width: '40px'}} src={product.img} alt="" />
                    </div>
                ))
            }
        </div>
    );
};

export default CourseDetail;