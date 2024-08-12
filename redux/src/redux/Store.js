import { createStore } from "redux";
import { reducer } from "./reduser";


 const Store=createStore(reducer)

export default Store