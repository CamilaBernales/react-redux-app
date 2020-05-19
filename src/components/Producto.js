import React,{Fragment} from 'react'

const Producto = () => {

    return(
        <Fragment>
            <h2 className="text-center my-5">
                Listado Productos
            </h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="
                        ">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                    <tbody>

                    </tbody>
                </thead>
            </table>
        </Fragment>
    )

}

export default Producto