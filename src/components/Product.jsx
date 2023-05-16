import React from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {eliminateProduct,getProductEdit} from './../actions/productsActions'
import swal from 'sweetalert2'
const Product =({product})=>{

    const dispatch = useDispatch();
    const history  = useHistory();
    const confirmEliminate =id =>{
       
        swal.fire({
            title:'¿Desea eliminar el producto?',
            text:'No sera reversible este cambio',
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            cancelButtonText:'Cancelar',
            confirmButtonText:'Eliminar'
        }).then((result)=>{
            
            if(result.value){
                const eliminate = ()=>dispatch(eliminateProduct(id))
            eliminate()
            }
        })
       
    }
    const redirect=product =>{
        dispatch(getProductEdit(product))
        history.push(`/products/edit/${product.id}`)
    }
    return(
        <tr>
            <td>{product.name}</td>
            <td><span className="font-weight-bold">${product.price}</span></td>
            <td className="actions">
            <button type="button" onClick={()=>redirect(product)}className=" btn btn-primary mr-2">Editar</button> 
            <button type="button" onClick={()=>confirmEliminate(product.id)}className="btn btn-danger">Eliminar</button>
            </td>
        </tr>
    )


}

export default Product