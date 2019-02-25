import React from 'react'

export default function WeatherEmoji(props) {
    let icon;
    switch(props.icon){
        case "clear-day":
            icon = "☀️ ";
            break;
        case "clear-night":
            icon = "🌙 ";
            break;
        case "cloudy":
            icon = "☁️";
            break;
        case "fog":
            icon = "🌫";
            break;
        case "hail":
            icon = "🌨";
            break;
        case "partly-cloudy-day":
            icon = "🌤";
            break;
        case "partly-cloudy-night":
            icon = "☁️";
            break;
        case "rain":
            icon = "🌧";
            break;
        case "sleet":
            icon = "🌨";
            break;
        case "snow":
            icon = "❄️ ";
            break;
        case "thunderstorm":
            icon = "❗️⛈";
            break;
        case "tornado":
            icon = "❗️🌪 ";
            break;
        case "wind":
            icon = "🌬"
            break;
        default:
            icon = "☀️";
        
  }
  
    return (
    <span className='is-size-1'>
      {icon}
    </span>
  )
}
