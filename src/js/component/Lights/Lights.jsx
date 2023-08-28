import React from 'react';
import "./style.css"
const Lights = () => {
    return (
        <div className='container'>
            <div className='sujecion'></div>
            <div className='container-lights'>
                <div className='light red'></div>
                <div className='light yellow'></div>
                <div className='light green'></div>
            </div>
        </div>
    )
}

export default Lights;