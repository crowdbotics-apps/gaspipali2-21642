import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp21147128Reducer from '../features/SignUp21147128/redux/reducers'
import SignIn22147127Reducer from '../features/SignIn22147127/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp21147128: SignUp21147128Reducer,
SignIn22147127: SignIn22147127Reducer,

});