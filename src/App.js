import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {fetchWeather} from "./actions"
import {bindActionCreators} from 'redux';
import WeatherSnippet from './WeatherSnippet';
import Temperature from './Temperature'
import ForecastDetail from './ForecastDetail';
import FullDetail from './FullDetail'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
class App extends Component {
  componentDidMount(){
    this.props.fetchWeather();

  }

  render() {

    return (
        <Router>
        <div className="container">
        <Route exact={true} path="/" render={() => (
            <div className="columns">
            <div className="column"><WeatherSnippet {...this.props.weather.currently} tempUnit={this.props.tempUnit} cityName="New York" cityImage="https://amp.businessinsider.com/images/5ad8ae04cd862425008b4898-750-563.jpg"/></div>
            <div className="column"><WeatherSnippet {...this.props.weather.currently} tempUnit={this.props.tempUnit}/></div>
            <div className="column"><WeatherSnippet {...this.props.weather.currently} tempUnit={this.props.tempUnit}/></div>
          </div>)}/>

        <Route exact={true} path="/day-details" render={() => (
          <div>
           <WeatherSnippet {...this.props.weather.currently} tempUnit={this.props.tempUnit}/>

          <FullDetail {...this.props.weather.currently}/>
          </div>
        )} />

        <Route exact={true} path="/extended" render={() => (
          <div>
          <ForecastDetail {...this.props.weather.daily} tempUnit={this.props.tempUnit} />
          </div>
        )} />




        </div>
        </Router>
    );
  }
}
function mapStateToProps(state){
  return {
    weather: state.weather,
    tempUnit: state.tempUnit
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchWeather: bindActionCreators(fetchWeather, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
