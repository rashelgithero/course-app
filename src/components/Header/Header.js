import React from 'react';
import Data from '../../data/data.json'
import './Header.css';

const Header = () => {
    
    return (
        <div className='company-logo'>
            <div className='course-heading'>
                <nav>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.MwXpQyuibMb4iJX0qoDXsQHaHa&pid=Api&P=0&h=360" alt="" />
                    <a href="/courses">COURSES</a>
                    <a href="/teacher">TEACHER</a>
                    <a href="about">ABOUT US</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;