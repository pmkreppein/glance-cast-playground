import React from 'react'
import ForecastDetailRow from './ForecastDetailRow';
import WeatherEmoji from './WeatherEmoji'
import {Link} from 'react-router-dom';
export default function ForecastDetail(props) {


  return (
    <div>
      <div className="card">
  <header className="card-header">
    <p className="card-header-title">
      Extended Forecast <br/>
      {props.summary}
    </p>

  </header>
  <div className="card-content">
    <div className="content">
    <table className="table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Weather</th>
          <th>
            <div className="tags has-addons">
            <span className="tag is-medium is-success">High</span>
            <span className="tag is-medium is-link">Low</span></div>
          </th>

          <th>
            <div className="tags has-addons">
            <span className="tag is-medium is-warning">Sunrise</span>
            <span className="tag is-medium is-black
            ">Sunset</span></div>
          </th>

           <th>Wind</th>
          <th>Pressure</th>
        </tr>
      </thead>
      <tbody>
  {props.data ? (props.data.map(day => <ForecastDetailRow {...day} tempUnit={props.tempUnit} />)) : (<p>Loading...</p>)}
      </tbody>
    </table>
    </div>
  </div>
  <footer className="card-footer">

    <Link className="card-footer-item is-active" to={'/'}>{'Return Home'}</Link>
  </footer>
  </div>
    </div>
  )
}
