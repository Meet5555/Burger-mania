import {combineReducers} from "redux";
import ordersReducer from "./ordersReducer";

const rootReducer = combineReducers({
  orderedBurgers: ordersReducer
})

export default rootReducer