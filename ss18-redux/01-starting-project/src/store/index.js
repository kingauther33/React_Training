import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './auth';
import authSliceReducer from './counter';

const store = configureStore({
	reducer: { counter: counterSliceReducer, auth: authSliceReducer },
});

export default store;
