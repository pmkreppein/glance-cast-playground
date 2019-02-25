import React from 'react'


function Wind(props){
    return(
        <div className="tags are-medium ">
            <div className="tag is-info">Direction: {Math.round(props.direction)}<span>&#176;</span> </div>
            <div className="tag is-dark">Speed: {Math.round(props.speed)}</div>
            <div className="tag is-warning">Gust: {Math.round(props.gust)}</div>
        </div>    

        
    )
}
export default Wind