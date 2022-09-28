import React, { useEffect, useState } from 'react';
import MyImage from '../../images/avatar.jpg';
import Detail from '../Details/Detail';
import Exercise from '../Exercise/Exercise';
import './Exercises.css';

function Exercises() {
  
    const [exercises, setExercises] = useState([]);
    
    useEffect(() =>{
        fetch('exercises.json')
        .then(res => res.json())
        .then(data => setExercises(data));
    }, []);
    
    
    return (
        <div className='container exercises-container'>
            <div className='exercise-container mt-4 '>
                {
                    exercises.map( exercise => <Exercise
                    key={exercise.id}
                    exercise={exercise}
                    ></Exercise>)
                }
            </div>

            <div className='container mt-4 ms-3 bg-secondary pt-3 ps-4'>
               <div className='d-flex align-items-center'>
                    <img className='rounded-5' style={{ width: '50px' }} src={MyImage} alt="" />
                    <h4 className='ms-3 text-light'>Arif Uddin</h4>
               </div>

               <div>
                    <Detail></Detail>
               </div>
               
            </div>
        </div>
    );
};
    

export default Exercises;