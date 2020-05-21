import{
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_ERROR,
    PRODUCTO_EDITADO_EXITO,
    COMENZAR_EDICION_PRODUCTO

} from '../types'
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';
//crear nuevos productos

export function crearNuevoProductoAction(producto){

    return async (dispatch) => {
        dispatch(agregarProducto());

        try {
            //insertar en la API
            await clienteAxios.post('/productos', producto);
            //si todo sale bien, actualizar state
            dispatch(agregarProductoExito(producto))

            //Alerta
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente.',
                'success'
            )

        } catch (error) {
            //si hay error cambiar state
            dispatch(agregarProductoError(true))
            //alerta de error 
            Swal.fire({
                icon:'error',
                title:'Hubo un error.',
                text: 'Hubo un error, intenta de nuevo'
            })
        }

    }

}

const agregarProducto = () =>({
    type: AGREGAR_PRODUCTO,
    payload: true
})

//si e producto se guarda en a base de datos

const agregarProductoExito = producto => ({

    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

// Si existe un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

//Funcion que descarga los productos de la base de datos
export function obtenerProductosAction(){
    return async (dispatch) => {
        dispatch(descargarProductos());

        try {
            setTimeout(async () => {
            const resp = await clienteAxios.get('/productos');
            dispatch(descargarProductosExitosa(resp.data))
            }, 3000);
        } catch (error) {
            dispatch(descargarProductosError());
        }
    }
}

const descargarProductos = () => ({
    type:COMENZAR_DESCARGA_PRODUCTOS,
    payload: true

})

const descargarProductosExitosa = (productos) => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})
const descargarProductosError = () =>({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})

//selecciona y elimina el producto
// Selecciona y elimina el producto
export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id) );

        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch( eliminarProductoExito() );

            // Si se elimina, mostrar alerta
            Swal.fire(
                'Eliminado',
                'El producto se eliminó correctamente',
                'success'
            )
        } catch (error) {
            dispatch(eliminarProductoError());
            
        }
    }
}

 const obtenerProductoEliminar = id => ({

    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id

})

const eliminarProductoExito = () =>({
    type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () =>({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload:true
})

//colocar prod en edicion
export function obtenerProductoEditar (producto) {
    return(dispatch) => {
        dispatch(obtenerProductoEditarAction(producto));
    }
}

const obtenerProductoEditarAction = producto => ({

    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto

})

// Edita un registro en la api y state
export function editarProductoAction(producto) {
    return async (dispatch) => {
        dispatch( editarProducto() );

        try {
            await  clienteAxios.put(`/productos/${producto.id}`, producto)
            dispatch(editarProductoExito(producto));
        
        } catch (error) {
            console.log(error);
        }
        
    }
}
const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO,
});
const editarProductoExito = producto =>({
    type: PRODUCTO_EDITADO_EXITO,
    payload : producto
})
