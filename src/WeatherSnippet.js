import React from 'react'
import Temperature from './Temperature'
import Wind from './Wind'
import WeatherEmoji from './WeatherEmoji';
import {Link} from 'react-router-dom';
function WeatherSnippet(props){


    return(
        <div className="card">
        <div class="card-image">
         <figure class="image is-4by3">
           <img src={props.cityImage} alt="Placeholder image"/>
         </figure>
       </div>

  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image ">
        <WeatherEmoji icon={props.icon}/>
        </figure>
      </div>
      <div className="media-content">
      <p className="title is-4">{props.cityName}</p>
      <div className="tags has-addons">
              <span className="tag is-medium is-info"><Temperature temp={props.temperature} unit={props.tempUnit}/></span>
              <span className="tag is-medium is-dark">{props.summary}</span>
              </div>
      </div>
    </div>
          <div className="content">
          <table className="table is-fullwidth">

      <tbody>
        <tr>
          <td>Feels Like</td>
          <td>
          <Temperature temp={props.apparentTemperature} unit={props.tempUnit} /></td>
        </tr>
        <tr>
          <td>Wind</td>
          <td><Wind direction={props.windBearing} speed={props.windSpeed} gust={props.windGust}/></td>
        </tr>
        <tr>
          <td>Visibility</td>
          <td>{props.visibility} Mi.</td>
        </tr>
        <tr>
          <td>Barometric Pressure</td>
          <td>{props.pressure} mb</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{props.humidity * 100}%</td>
        </tr>
      </tbody>
    </table>
          </div>
        </div>
        <footer className="card-footer">
        <Link className="card-footer-item" to={'/day-details'}>{'Current Details'}</Link>
        <Link className="card-footer-item" to={'/extended'}>{'Extended Forecast'}</Link>
    {/* <a href="#" className="card-footer-item">Details</a>
    <a href="#" className="card-footer-item">Day Forecast</a>
    <a href="#" className="card-footer-item">Long Range</a> */}
  </footer>
      </div>
    )
}

export default WeatherSnippet;
