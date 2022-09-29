import React, { useEffect, useState } from 'react';
import MyImage from '../../images/avatar.jpg';

import Detail from '../Details/Detail';
import Exercise from '../Exercise/Exercise';
import './Exercises.css';

function Exercises() {
    const [exercises, setExercises] = useState([]); 
    const [time, setTime] = useState([]);
    // console.log(time)
    
    useEffect(() =>{
        fetch('exercises.json')
        .then(res => res.json())
        .then(data => setExercises(data));
    }, []);

    
    const exerciseTime = (requiredTime) => {
        const newTime = [...time, requiredTime];
        setTime(newTime);
        
    }
    
    return (
        <div className='container exercises-container'>
            <div className='exercise-container mt-4 '>
                {
                    exercises.map( exercise => <Exercise
                    key={exercise.id}
                    exercise={exercise}
                    exerciseTime={exerciseTime}
                    ></Exercise>)
                }
            </div>

               
            <div className='card container mt-4 bg-secondary ms-lg-3 me-3 pt-3 ps-4 ' style={{ width: '20rem' }}>
                <div className='d-flex align-items-center'>
                        <img className='rounded-5' style={{ width: '50px' }} src={MyImage} alt="" />
                        <div >
                            <h4 className='ms-3 text-light'>Arif Uddin</h4>
                            <h6 className='ms-3 text-light fs-6'>Dhaka,Bangladesh</h6>
                        </div>
                </div>

                <div className='sideBar'>
                        <Detail time={time}></Detail>
                </div>
            </div>
               

        </div>
    );
};
    

export default Exercises;