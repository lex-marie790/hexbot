import { FETCH_HEX_START, FETCH_HEX_SUCCESS, FETCH_HEX_FAILURE } from '../actions/actions.js';

const initialState = {
    hex: [],
    isFetching: false,
    error:''
}

function reducer( state= initialState, action) {
    console.log('reducer', action.payload);
    switch(action.type){
        case FETCH_HEX_START:
            console.log('start', action.payload);
            return{
                ...state,
                isFetching:true,
                error:'',
                hex: []
            };
            
            case FETCH_HEX_SUCCESS:
                console.log('success', action.payload)
                return{
                    ...state,
                    isFetching: false,
                    hex: action.payload
                };

                case FETCH_HEX_FAILURE:
                    console.log('failure', action.payload)
                    return{
                        ...state,
                        error: action.payload,
                        isFetching: false,
                    };

                    default:
                        return state;
    }
}

export default reducer;