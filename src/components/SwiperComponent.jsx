import React, { useState } from 'react';



const SwiperComponent = (props) => {
    return (
        <div>
                <img src={props.img} alt="abdullayev" /> 
                <p>{props.title}<br /> <span> {props.spann} </span></p>
                
        </div>
    );
};

export default SwiperComponent;