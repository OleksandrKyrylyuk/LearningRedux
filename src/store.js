import { createStore } from "redux";
import RootReducers from './reducers/rootReducer'

const store = createStore(RootReducers);

export default store;