import {combineReducers} from 'redux';
import dataReducer from './dataReducer';


const rootReducer=combineReducers({
    sw_data:dataReducer
});

export default rootReducer;