import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    
    const notify = () => {
        // console.log("clicked");
        toast.success('Wow so easy!');
    }

    return (
        <div>
            <button onClick={notify} className="btn btn-primary mt-4" style={{ width: '17rem' }}>Activity completed</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Toast;