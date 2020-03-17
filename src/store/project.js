import { createStore } from "redux";
import rootReducer from "../reducer/project";
const store = createStore(rootReducer);
export default store;
