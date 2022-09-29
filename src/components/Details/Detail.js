import React, { useEffect, useState } from 'react';
import './Detail.css';

const Detail = ({time}) => {
    // console.log(total)
    let total = 0;
    
    for(const exerciseTime of time){
        total = total + parseFloat(exerciseTime.time_required);
    }
    
    const [breakTime, setBreakTime] = useState([]);

    const handleBreakTime = (event) =>{
        
        setBreakTime(event.target.innerText);
        const storeTime = event.target.innerText;
        localStorage.setItem("Break-Time", JSON.stringify(storeTime));
    }
    
    useEffect( () =>{
        const storedTime = localStorage.getItem("Break-Time");
        setBreakTime(JSON.parse(storedTime));
    
    },[breakTime])
    

    return (
        <div>
            <div className='card mt-4' style={{ width: '17rem' }}>
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
                <div className='card mt-4' style={{ width: '17rem' }}>
                    <div className='d-flex p-3'>
                        <button onClick={(event) => handleBreakTime(event)} className="btn rounded-5 p-2 m-1 btn-primary w-25">10s</button>
                        <button onClick={(event) => handleBreakTime(event)} className="btn rounded-5 p-2 m-1 btn-primary w-25">20s</button>
                        <button onClick={(event) => handleBreakTime(event)} className="btn rounded-5 p-2 m-1 btn-primary w-25">30s</button>
                        <button onClick={(event) => handleBreakTime(event)} className="btn rounded-5 p-2 m-1 btn-primary w-25">40s</button>
                        <button onClick={(event) => handleBreakTime(event)} className="btn rounded-5 p-2 m-1 btn-primary w-25">50s</button>
                    </div>
                </div>
            </div>

            <div>
                <h4 className='mt-4 text-light'>Exercise Details</h4>
                <div className='card mt-4 p-4' style={{ width: '17rem' }}>
                    <h6>Exercise time<span className='ms-5 ps-4 text-primary'>{total}s</span></h6>
                </div>
                <div className='card mt-4 p-4' style={{ width: '17rem' }}>
                    <h6>Break time<span className='ms-5 ps-5 text-primary'>{breakTime}</span></h6>
                </div>
            </div>

        </div>
        
    );
};

export default Detail;