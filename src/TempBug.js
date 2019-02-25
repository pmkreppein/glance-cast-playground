import React from 'react'
import Temperature from './Temperature'
export default function TempBug(props) {


      if (props) {
          return (<div className="tags has-addons">
          <span className="tag is-medium is-success"><Temperature temp={props.high} unit={props.unit}/></span>
          <span className="tag is-medium is-link"><Temperature temp={props.low} unit={props.unit}/></span></div>);
      }
        return (<p>Loading...</p>);
      

    

}


