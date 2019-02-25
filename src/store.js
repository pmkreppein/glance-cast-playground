import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  cities: [
    "nyc": {
      name: "New York City",
      latlong: "40.7691,-73.9814",
      img_url: "https://worldstrides.com/wp-content/uploads/2015/07/iStock_000040849990_Large.jpg",
      weather: []
    },
    "phx": {
      name: "Las Vegas",
      latlong: "36.1295,-115.1725",
      img_url: "https://www.lasvegaskids.net/img/hoteldeals/trump_hotel_las_vegas.jpg",
      weather: []
    },
    "wdc": {
      name: "Washington DC",
      latlong: "38.8815, -77.0714",
      img_url: "https://www.whitehouse.gov/wp-content/uploads/2017/12/35492069145_7d58e21088_k-1-1920x720.jpg",
      weather: []
    },
    "bos": {
      name: "Boston",
      latlong: "42.3411, -71.1255",
      img_url: "https://faneuilhallmarketplace.com/wp-content/uploads/sites/203/2017/10/things-to-do-in-boston-mall-faneuil-hall-1024x640.jpg",
      weather: []
    },
    "cus": {
      name: "Your Location",
      latlong: "",
      img_url: "",
      weather: []
    }
  ],
  weather: [],
  tempUnit: 'F',
  error: ""
}


const composeEnhancers = composeWithDevTools({
});
export default createStore(reducer, initialState, composeEnhancers(
  applyMiddleware(thunk)));
