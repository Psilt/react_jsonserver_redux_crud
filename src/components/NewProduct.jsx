import React,{useState} from 'react'
import {newProductAction} from './../actions/productsActions'
import {useDispatch,useSelector} from 'react-redux'
import {showAlert,hideAlert} from './../actions/alertActions'

const NewProduct =({history})=>{

const dispatch=useDispatch()
const loader =useSelector(state=>state.products.loader)
const error = useSelector(state=>state.products.error)
const alert= useSelector(state=>state.alerts.alert)

const newProduct= product=> dispatch(newProductAction(product))



const [name,setName]=useState('')
const [price,setPrice] =useState(0)



const handleSubmit = (e)=>{
    e.preventDefault()

    if(name.trim()===''|| price <= 0){
        
        const alert={
            msg:'Todos los campos son obligatorios',
            class:'alert alert-danger p3 text-center text-uppercase'
        }
        dispatch(showAlert(alert))
        return
    }
    newProduct({
        name,
        price
    })
    history.push('/')

}

return(
<div className="row justify-content-center">
    <div className="col-md-8 ">
        <div className="card">
            <div className="card-body">
                <h2 className="text-center mb-4 font-weight-bold">
            Agregar Producto</h2>

{alert ? <p className={alert.class}>{alert.msg}</p>: dispatch(hideAlert())}
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nombre del Producto</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del producto"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
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
                    onChange={e => setPrice(Number(e.target.value))}
                ></input>
            </div>
            <button
                type="submit"
                className="btn btn-primary d-block w-100 font-weight-bold text-uppercase">
            Agregar Producto         
            </button>
        </form>
        {loader ? <p>Cargando</p>:null}
        {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p>:null}
            </div>
        </div>


    </div>


</div>
)

}

export default NewProduct