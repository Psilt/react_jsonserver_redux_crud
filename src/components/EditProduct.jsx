import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {startEditing} from './../actions/productsActions'
const EditProduct =()=>{

 const dispatch= useDispatch()  
 const history = useHistory()
 
const [edit,setEdited] =useState({
    name:'',
    price:''
})
const product = useSelector(state =>state.products.edited) 


useEffect(()=>{
    setEdited(product)
 },[product])

 const changeEdited=e=>{
     setEdited({
         ...edit,
         [e.target.name]:e.target.value
    })
}
if(!product) history.push('/')
const {price,name}=edit

const submitEdit=(e)=>{
     e.preventDefault()
      dispatch(startEditing(edit))
      history.push('/')
}



 return(

<div className="row justify-content-center">
    <div className="col-md-8 ">
        <div className="card">
            <div className="card-body">
                <h2 className="text-center mb-4 font-weight-bold">
            Editar Producto</h2>

        <form 
            onSubmit={submitEdit}
        >
            <div className="form-group">
                <label>Nombre del Producto</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del producto"
                    name="name"
                    value={name}
                    onChange={changeEdited}
                ></input>
            </div>
            <div className="form-group">
                <label>Precio del Producto</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Precio del producto"
                    name="price"
                    value={price}
                    onChange={changeEdited}
                ></input>
            </div>
            <button
                type="submit"
                className="btn btn-primary d-block w-100 font-weight-bold text-uppercase">
           Guardar Producto         
            </button>
        </form>
            </div>
        </div>


    </div>


</div>
)

}

export default EditProduct