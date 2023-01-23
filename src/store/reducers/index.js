import {combineReducers} from "redux";

import translate from "./translate.reducer.js";
import modal from "./modal.reducer.js";
import system from "./system.reducer.js";

export default combineReducers({
		translate,
		modal,
		system
});

