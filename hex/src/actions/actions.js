import axios from 'axios';

export const FETCH_HEX_START = 'FETCH_HEX_START';
export const FETCH_HEX_SUCCESS = 'FETCH_HEX_SUCCESS';
export const FETCH_HEX_FAILURE = 'FETCH_HEX_FAILURE';

export const getHex = () => {
    return dispatch => {
        dispatch({
            type: FETCH_HEX_START
        });

        axios
        .get('https://api.noopschallenge.com/hexbot')
        .then(res => 
            {
                dispatch({
                    type: FETCH_HEX_SUCCESS, payload: res.data
                });
            }
        
        )
        .catch(err => {
            console.log(err);
            dispatch({
                type:FETCH_HEX_FAILURE, payload: err
            });
        });
        
    }
}