import React from 'react'
import Moment from 'react-moment';

export default function SunBug(props) {
    let sunrise = props.sunrise;
    let sunset = props.sunset;

    if (sunrise) {

        return (<div className="tags has-addons">
        <span className="tag is-medium is-warning"><Moment unix date={sunrise} format="LT"/></span>
        <span className="tag is-medium is-black"><Moment unix date={sunset} format="LT"/></span></div>);
    }
      return (<p>Loading...</p>);
    
}
