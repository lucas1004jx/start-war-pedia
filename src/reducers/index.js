import {combineReducers} from 'redux';
import dataReducer from './dataReducer';
import menuControlReducer from './menuControlReducer';


const rootReducer=combineReducers({
    sw_data:dataReducer,
    menuState:menuControlReducer
});

export default rootReducer;