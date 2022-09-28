import React from 'react';
import './Detail.css';

const Detail = () => {
    return (
        <div>
            <div className='card mt-4' style={{ width: '19rem' }}>
                <div className='d-flex justify-content-around'>
                    <div className='p-2'>
                        <h4>64<small className='text-secondary'>kg</small></h4>
                        <h5>Weight</h5>
                    </div>
                    
                    <div className='p-2'>
                        <h4>5.9</h4>
                        <h5>Hight</h5>
                    </div>
                    
                    <div className='p-2'>
                        <h4>25<small className='text-secondary'>yrs</small></h4>
                        <h5>Age</h5>
                    </div>
                </div>
            </div>

            <div>
                <h4 className='mt-4 text-light'>Add a break</h4>
                <div className='card mt-4' style={{ width: '19rem' }}>
                    <div className='d-flex p-3'>
                        <button className="btn rounded-5 p-2 m-1 btn-primary w-25">10s</button>
                        <button className="btn rounded-5 p-2 m-1 btn-primary w-25">20s</button>
                        <button className="btn rounded-5 p-2 m-1 btn-primary w-25">30s</button>
                        <button className="btn rounded-5 p-2 m-1 btn-primary w-25">40s</button>
                        <button className="btn rounded-5 p-2 m-1 btn-primary w-25">50s</button>
                    </div>
                </div>
            </div>

            <div>
                <h4 className='mt-4 text-light'>Exercise Details</h4>
                <div className='card mt-4 p-4' style={{ width: '19rem' }}>
                    <h6>Exercise time</h6>
                </div>
                <div className='card mt-4 p-4' style={{ width: '19rem' }}>
                    <h6>Break time</h6>
                </div>
            </div>

        </div>
        
    );
};

export default Detail;