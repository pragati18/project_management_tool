import { createStore } from "redux";
import rootReducer from "../reducer/employee";
const store = createStore(rootReducer);
export default store;
