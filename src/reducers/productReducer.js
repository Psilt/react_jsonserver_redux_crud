import {
    ADD_PRODUCT,
    SUCCESS_PRODUCT,
    ERROR_PRODUCT,
    ADD_DOWNLOAD,
    ERROR_DOWNLOAD,
    SUCCESS_DOWNLOAD,
    GET_ELIMINATED,
    SUCCESS_ELIMINATED,
    ERROR_ELIMINATED,
    GET_EDITED,
    SUCCESS_EDITED,
    ERROR_EDITED
} from '../types'

const initialState={
    products:[],
    error:null,
    loader:false,
    eliminated:null,
    edited:null
}

export default function(state=initialState,action){
    switch(action.type){
        
        case ADD_DOWNLOAD:
        case ADD_PRODUCT:
        return{
            ...state,
            loader:action.payload
        }
        case SUCCESS_PRODUCT:
        return{
            ...state,
            loader:false,
            products:[...state.products,action.payload]
        }
        case ERROR_DOWNLOAD:
        case ERROR_PRODUCT:
        case ERROR_ELIMINATED:
        case ERROR_EDITED:
        return{
            ...state,
            loader:false,
            error:action.payload
        }
        case SUCCESS_DOWNLOAD:
            return{
                ...state,
                loader:false,
                error:null,
                products:action.payload
            }
        case GET_ELIMINATED:
            return{
                ...state,
                eliminated:action.payload
            }
        case SUCCESS_ELIMINATED:
            return{
                ...state,
                products: state.products.filter(product => product.id !== state.eliminated),
                eliminated:null
            }
        case GET_EDITED:
            return{
                ...state,
                edited:action.payload
            }
            case SUCCESS_EDITED:
            return{
                ...state,
                edited:null,
                products: state.products.map(product => product.id === action.payload.id ? product=action.payload : product
               )
            }
        default:
            return state
    }
}