import React from 'react';
import logo from '../../images/gymlogo.png';

const Title = () => {
    return (
        <div className='container mt-4'>
            <div className='d-flex align-items-center '>
                <img className='rounded-5 ' style={{ width: '90px' }} src={logo} alt="" />
               <h1 className='text-danger mb-1 ps-0'>MUSCLE & Fitness</h1>
            </div>
            <h3 className='text-secondary mt-3'>Select today’s exercise</h3>
        </div>
    );
};

export default Title;