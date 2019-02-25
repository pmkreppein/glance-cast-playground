import React, { Component } from 'react'
function Temperature(props){
    let temp;

    if (props.unit === "F"){
        temp = Math.round(props.temp)
    }
    else if (props.unit === "C"){
        temp = Math.round((props.temp - 32) * (5/9)) 
    }
    
    return(
        <div><p>{temp}<span>&#176;</span> {props.unit}</p></div>
    )
}
export default Temperature