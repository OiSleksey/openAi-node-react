import { postRequest } from '../../api/postOpenAi';
import { getDateCurrency } from '../../api/getTime';
import * as actions from '../actions/chatWithOpenAi.actions';

export const openAiDispatch = message => {
  return function (dispatch) {
    dispatch(actions.canEnterRequest(false));
    dispatch(actions.questionForChat(message));
    dispatch(actions.dateQuestionForChat(getDateCurrency()));
    postRequest(message)
      .then(data => {
        dispatch(actions.replyFromChat(data));
        dispatch(actions.canEnterRequest(true));
        dispatch(actions.dateReplyFromChat(getDateCurrency()));
      })
      .catch(data => {
        dispatch(actions.replyFromChat(data));
        dispatch(actions.canEnterRequest(true));
        dispatch(actions.dateReplyFromChat(getDateCurrency()));
      });
  };
};

// export const getLocationWeatherDispatch = () => {
//   return function (dispatch) {
//     getLocation().then(data => {
//       dispatch(actions.weatherLocation(data));
//       dispatch(getPositionName(data.lat, data.lon));
//       dispatch(getWeatherCode(data.lat, data.lon));
//       dispatch(getWeatherTemperature(data.lat, data.lon));
//       dispatch(getWeatherRelativeHumidity(data.lat, data.lon));
//       dispatch(getWeatherPressure(data.lat, data.lon));
//       dispatch(getWeatherWindSpeed(data.lat, data.lon));
//       dispatch(getWeatherWindDirection(data.lat, data.lon));
//     });
//   };
// };

// export const getPositionName = (lat, lon) => {
//   return function (dispatch, getState) {
//     getPosition(lat, lon).then(data => {
//       dispatch(actions.weatherPositionName(data));
//     });
//   };
// };

// export const getWeatherCode = (lat, lon) => {
//   return function (dispatch) {
//     fetchWeather
//       .getWeatherCode(lat, lon)
//       .then(data => dispatch(actions.weatherCode(data)));
//   };
// };

// export const getWeatherTemperature = (lat, lon) => {
//   return function (dispatch) {
//     fetchWeather
//       .getTemperature(lat, lon)
//       .then(data => dispatch(actions.weatherTemperature(data)));
//   };
// };

// export const getWeatherRelativeHumidity = (lat, lon) => {
//   return function (dispatch) {
//     fetchWeather
//       .getRelativeHumidity(lat, lon)
//       .then(data => dispatch(actions.weatherRelativeHumidity(data)));
//   };
// };

// export const getWeatherPressure = (lat, lon) => {
//   return function (dispatch) {
//     fetchWeather
//       .getPressure(lat, lon)
//       .then(data => dispatch(actions.weatherPressure(data)));
//   };
// };

// export const getWeatherWindSpeed = (lat, lon) => {
//   return function (dispatch) {
//     fetchWeather
//       .getWindSpeed(lat, lon)
//       .then(data => dispatch(actions.weatherWindSpeed(data)));
//   };
// };

// export const getWeatherWindDirection = (lat, lon) => {
//   return function (dispatch) {
//     fetchWeather
//       .getWindDirection(lat, lon)
//       .then(data => dispatch(actions.weatherWindDirection(data)));
//   };
// };
