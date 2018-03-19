import { YOUTUBE_KEY } from '../config/youtubekey';
import { 
    FETCH_VIDEOS_ATTEMPT,
    FETCH_VIDEOS_SUCCESS,
    FETCH_VIDEOS_FAIL,
    SELECT_VIDEO } from '../constants';

import axios from 'axios';

export function getvideos(query, initial){
    const fixed = 'https://www.googleapis.com/youtube/v3/search';
    let url = fixed + '?part=snippet' + '&maxResults=5' + '&q='+ query + '&key='+ YOUTUBE_KEY;

    return async function (dispatch){
        try{
           dispatch({type: FETCH_VIDEOS_ATTEMPT});
           const body = await fetch(url);
           const resp = await body.json;
           dispatch({type: FETCH_VIDEOS_SUCCESS, payload: resp });
        }catch(e){
            dispatch({type: FETCH_VIDEOS_FAIL, payload: e});

        }

    };
}
export function selectVideo (video){
    return {
        typr: SELECT_VEDIO,
        payload: video
    };
};

    