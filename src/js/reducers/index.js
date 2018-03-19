import {combineReducers} from 'redux';
import videoListReducer from './videoListRudecer';
import selectedVideoReducer from './selectedVideoReducer';

const rootReducer = combineReducers({

    videoList: videoListReducer,
    selectedVideo: selectedVideoReducer

});

export default rootReducer;
