import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { chatReducer } from './reducers/chatWithOpenAi.reducer';
import { heightComponentsReducer } from './reducers/heightComponents.reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import rootReducer from './reducers'

const allReducers = combineReducers({
  chatWithAi: chatReducer,
  heightComponents: heightComponentsReducer,
  // hourWeather: selectedHourOfDayReducer,
  // isUI: stateUIReducer,
  // weatherData: locationWeatherReducer,
  // timeDateNow: timeDateNowReducer,
  // weekWeather: selectedWeekdayReducer,
  // partWeather: selectedPartOfDayReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   allReducers,
//   composeEnhancers(applyMiddleware(thunk))
// );
export default store;
