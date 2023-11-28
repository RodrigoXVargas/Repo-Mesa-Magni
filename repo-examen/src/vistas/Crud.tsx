import { Articulo } from "../interfaces/Articulo"
import { deleteById } from "../api/llamadasApi"
import { useFetchAllArticulos } from "../customHooks/useFetchAllArticulos"


function Crud(){
    const { articulos, loading } = useFetchAllArticulos()

    const handleDelete = async (id: string) => {
        if(confirm('Seguro que quiere eliminar el registro?')){
            const respuesta = await deleteById(id)
            alert('Se eliminó el registro' + respuesta)
        } 
    }

    return (
        <>
            <div>
            <button className="btn btn-primary" onClick={() => window.location.href = 'http://localhost:5173/crud/0'}>Nuevo registro</button>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>codigo</td>
                            <td>denominacion</td>
                            <td>precio</td>
                            <td>Id Rubro</td>
                            <td>Botones</td>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && <tr>
                            <td>Cargando</td>
                            <td>Cargando</td>
                            <td>Cargando</td>
                            <td>Cargando</td>
                            <td>Cargando</td>
                            <td>Cargando</td>
                            </tr>}
                    {articulos.map((articulo: Articulo) => (
                        <tr key={articulo.id}>
                            <td>{articulo.id}</td>
                            <td>{articulo.codigo}</td>
                            <td>{articulo.denominacion}</td>
                            <td>{articulo.precio}</td>
                            <td>{articulo.idrubro}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => window.location.href = `http://localhost:5173/details/${articulo.id}`}>Detalles</button>
                                <button className="btn btn-warning" onClick={() => window.location.href = `http://localhost:5173/crud/${articulo.id}`}>Editar</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(articulo.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                    
                
            </div>
        </>
    )
}

export default Crud