import React,{useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions de redux
import { crearNuevoProductoAction } from "../actions/productoActions";

const NuevoProducto = ({history}) => {

  //state del componente
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState(0)


  //crea una funcion
  const dispatch = useDispatch();
  //acceder al state del store
  const cargando = useSelector((state) => state.productos.loading )
  const error =useSelector(state => state.productos.error)
  // console.log(cargando)
  //madar llamar e action de productoAction
  const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto));

  const submitNuevoProducto = (e) => {
    e.preventDefault();
    //validar formulario
    if(nombre.trim() === '' || precio<= 0){
      return;
    }
    //si no hay errores

    //crear el nuevo producto
    agregarProducto(
     { nombre,
      precio}
    );

    //redirecionar
    history.push('/');
  };



  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              AGREGAR NUEVO PRODUCTO
            </h2>
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name={nombre}
                  onChange={e => setNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name={precio}
                  onChange={e => setPrecio(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold w-100 d-block"
              >
                AGREGAR
              </button>
            </form>
            {cargando ? <p>Cargando...</p> : null}
            {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
