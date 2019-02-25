import axios from 'axios';


export function fetchWeather(){
  return function(dispatch){
      axios.get(" https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast//40.7128,-74.0060?exclude=minutely")
      .then((response) => {
        dispatch({type: 'GET_WEATHER', payload: response.data })
      })
        .catch((err) => {
          dispatch({type: "ERROR", payload: err})
        })
      }
  }
