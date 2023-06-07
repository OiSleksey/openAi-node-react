import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
// import { applyMiddleware, compose } from 'react-redux';
import thunk from 'redux-thunk';
// import { tasksReducer } from '../tasks/tasks.reducer';
import { locationWeatherReducer } from './reducers/locationWeather.reducer';
import { timeDateNowReducer } from './reducers/timeData.reducer';
import { selectedWeekdayReducer } from './reducers/daysOfWeekWeather.reducer';
import {
  selectedPartDayReducer,
  selectedPartOfDayReducer,
} from './reducers/partsOfDayWeather.reducer';
import { stateUIReducer } from './reducers/stateUI.reducer';
import { selectedHourOfDayReducer } from './reducers/hoursOfDayWeather.reducer';
// import { weatherCodeReducer } from './weather-code/weather-code.reducer';

const allReducers = combineReducers({
  hourWeather: selectedHourOfDayReducer,
  isUI: stateUIReducer,
  weatherData: locationWeatherReducer,
  timeDateNow: timeDateNowReducer,
  weekWeather: selectedWeekdayReducer,
  // partWeather: selectedPartDayReducer,
  partWeather: selectedPartOfDayReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
