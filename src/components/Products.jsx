import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {downloadProduct} from './../actions/productsActions'
import Product from './Product'
const Products =()=>{

    const dispatch= useDispatch()
    const products= useSelector(state=>state.products.products)
    const error =   useSelector(state=>state.products.error)
    const loader=   useSelector(state=>state.products.loader)
    useEffect(()=>{
        const addDownloadProduct=()=>dispatch(downloadProduct())
        addDownloadProduct()
        //eslint-disable-next-line
    },[])


return(
<>
<h2 className="text-center my-5">Listado de Productos</h2>
{error ? <p className="font-weight-bold alert alert-danger mt-4 text-center">Hubo un error</p>:null}
{loader ? <p className="text-center">Cargando...</p>:null}
<table className="table tale-striped">
<thead className="bg-primary table-dark">
    <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        <th scope="col">Acciones</th>
    </tr>

</thead>
<tbody>
{products.length === 0 ? <tr><td>'No hay Productos'</td></tr> : (
        products.map(product =>(
            <Product key={product.id} product={product}> </Product>
        ))
    )}
</tbody>
</table>
</>
)

}

export default Products