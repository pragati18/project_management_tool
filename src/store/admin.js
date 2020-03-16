import { createStore } from "redux";
import rootReducer from "../reducer/admin";
const store = createStore(rootReducer);
export default store;
