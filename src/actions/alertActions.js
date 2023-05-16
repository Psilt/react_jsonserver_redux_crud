import{
SHOW_ALERT,
HIDE_ALERT
}from './../types'


export function showAlert(alert){
    return (dispatch)=>{
        dispatch(showAlertError(alert))
    }
}

const showAlertError =(alert)=>({
    type:SHOW_ALERT,
    payload:alert
})

export function hideAlert(){
    return (dispatch)=>{
        dispatch(hideAlertShowed())
    }
}

const hideAlertShowed=()=>({
    type:HIDE_ALERT
})