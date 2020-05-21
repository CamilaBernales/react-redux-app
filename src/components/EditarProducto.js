import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {editarProductoAction }from '../actions/productoActions'
import {useHistory} from 'react-router-dom'

const EditarProducto = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [producto, setProducto] = useState({
      nombre: '',
      precio: ''
    })


  const productoEditar = useSelector(state => state.productos.productoeditar);

  //llenar state
  useEffect(() => {
    setProducto(productoEditar);
  }, [productoEditar])

  const onChangeForm = e => {
    setProducto({
      ...producto,
      [e.target.name] : e.target.value
    })
  }

  

  const submitEditarProducto = e => {
    e.preventDefault();
   dispatch(editarProductoAction(producto));
   history.push('/');
  }


    return(
        <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                AGREGAR NUEVO PRODUCTO
              </h2>
              <form
                    onSubmit={submitEditarProducto}>
                <div className="form-group">
                  <label>Nombre Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Producto"
                    name="nombre"
                    value={producto.nombre}
                    onChange={onChangeForm}
                   
                  />
                </div>
  
                <div className="form-group">
                  <label>Precio Producto</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Precio Producto"
                    name="precio"
                    value={producto.precio}
                    onChange={onChangeForm}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold w-100 d-block"
                >
                  Guardar Cambios
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )

}

export default EditarProducto