import React from 'react';

const Exercise = ({exercise, exerciseTime}) => {
    // console.log(exerciseTime)

    const { img, exercise_name, exercise_detail, time_required } = exercise;

    return (
           
        <div className='card exercise' style={{ width: '20rem' }}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{exercise_name}</h5>
                <p className="card-text" style={{textAlign: "justify"}}>{exercise_detail}</p>
                <p>Time required : {time_required}s</p>
            </div>
            <button onClick={() => exerciseTime(exercise)} className="btn btn-primary w-100 btn-addToList">Add to list</button>
        </div>
        
    );
};

export default Exercise;