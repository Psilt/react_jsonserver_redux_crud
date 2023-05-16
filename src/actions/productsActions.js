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
    ERROR_EDITED,
    START_EDITED
   } from '../types'
import axiosClient from './../config/axios'
import swal from 'sweetalert2'

export function newProductAction(product){
    return async (dispatch)=>{
        dispatch (addProduct())
        try {
            await axiosClient.post('/products',product)
           dispatch(productSuccess(product)) 
          swal.fire(
              'Correcto',
              'Se inserto correctamente el producto',
              'success'
          )
        } catch (error) {
            console.log(error)
            dispatch(productError(true))
            swal.fire({
                icon:'error',
                title:'Hubo un error',
                text:'Se produjo un error ,intente nuevamente'
            }
                
            )
        }
    }
}

const productSuccess=product =>({
     type:SUCCESS_PRODUCT,
     payload:product


})
const productError=boolean =>({
    type:ERROR_PRODUCT,
    payload:boolean


})
const addProduct=() =>({
    type:ADD_PRODUCT,
    payload:true

})

export function downloadProduct(){
    return async (dispatch)=>{
        dispatch (addDownload())
        try {
           const res= await axiosClient.get('/products')
           dispatch(downloadSuccess(res.data))
        } catch (error) {
            console.log(error)
            dispatch(downloadError())  
            
        }
    }
}

const downloadSuccess =products=>({
     type:SUCCESS_DOWNLOAD,
     payload:products
})
const downloadError=() =>({
    type:ERROR_DOWNLOAD,
    payload:true
})
const addDownload=() =>({
    type:ADD_DOWNLOAD,
    payload:true

})

export function eliminateProduct(id){
    return async(dispatch)=>{
        dispatch(getEliminated(id));
    try {
         await axiosClient.delete(`/products/${id}`)
        dispatch(eliminateSuccess())
        swal.fire(
            'Eliminado',
            'EL producto fue eliminado',
            'success'
        )

    } catch (error) {
        dispatch(eliminateError())
        console.log(error)
    }
    }
}
    const getEliminated= id=>({
        type:GET_ELIMINATED,
        payload:id
    })
    const eliminateSuccess=()=>({
        type: SUCCESS_ELIMINATED
    })
    
    const eliminateError=()=>({
        type: ERROR_ELIMINATED,
        payload:true
    })

export function getProductEdit(product){
    return(dispatch)=>{
        dispatch(editProduct(product))
    }
}

const editProduct=product =>({
    type: GET_EDITED,
    payload:product
})

export function startEditing(product){
    return async (dispatch)=>{
        dispatch(editingProduct())
        try {
         const result = await axiosClient.put(`/products/${product.id}`,product)
         dispatch(editSuccess(product))
        } catch (error) {
            console.log(error)
            dispatch(editError())
        }
    }
}

const editingProduct= () =>({
    type:START_EDITED
})
const editSuccess=(product)=>({
    type:SUCCESS_EDITED,
    payload:product
})
const editError=()=>({
    type:ERROR_EDITED,
    payload:true
})