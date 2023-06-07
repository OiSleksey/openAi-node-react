import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { chatReducer } from './reducers/chatWithOpenAi.reducer';

const allReducers = combineReducers({
  chatWithAi: chatReducer,
  // hourWeather: selectedHourOfDayReducer,
  // isUI: stateUIReducer,
  // weatherData: locationWeatherReducer,
  // timeDateNow: timeDateNowReducer,
  // weekWeather: selectedWeekdayReducer,
  // partWeather: selectedPartOfDayReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
