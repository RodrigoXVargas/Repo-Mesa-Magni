import { ChangeEvent, useState } from "react"
import { Rubro } from "../interfaces/Rubro"
import { getAllArtByRubro } from "../api/llamadasApi"
import { Articulo } from "../interfaces/Articulo"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFetchAllRubros } from "../customHooks/useFetchAllRubros";

function Home() {
    const { rubros } = useFetchAllRubros()
    const [idRubroSeleccionado, setIdRubroSeleccionado] = useState<string>()
    const [articulos, setArticulos] = useState<Articulo[]>([])
    const [visual, setVisual] = useState(false)
    const [loading, setLoading] = useState(true)

    const obtenerArtiiculosByRubro = async (idRubro: string) => {
        if (idRubro === undefined) return
        const datos: Articulo[] = await getAllArtByRubro(idRubro)
        setArticulos(datos)
    }

    const handleChangeRubros = (e: ChangeEvent<HTMLSelectElement>) => {
        setVisual(false)
        setLoading(false)

        if (e.target.value === "nada") {
            setIdRubroSeleccionado(e.target.value)
        } else {
            setVisual(true)
            setLoading(true)
            setIdRubroSeleccionado(e.target.value)
            obtenerArtiiculosByRubro(e.target.value)
                .finally(() => setLoading(false))

        }
    }

    return (
        <>
            <div>
                <select value={idRubroSeleccionado} onChange={handleChangeRubros}>
                    <option value="nada">Seleccione un rubro</option>
                    {rubros.map((rubro: Rubro) => (
                        <option key={rubro.id} value={rubro.id}>{rubro.denominacion}</option>
                    ))}
                </select>
            </div>

            <div>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>codigo</td>
                            <td>denominacion</td>
                            <td>precio</td>
                        </tr>
                    </thead>
                    {visual &&
                        <tbody>
                            {loading &&
                                <tr>
                                    <td>Cargando</td>
                                    <td>Cargando</td>
                                    <td>Cargando</td>
                                    <td>Cargando</td>
                                </tr>}

                            {!loading &&
                                articulos.map((articulo: Articulo) => (
                                    <tr>
                                        <td>{articulo.id}</td>
                                        <td>{articulo.codigo}</td>
                                        <td>{articulo.denominacion}</td>
                                        <td>{articulo.precio}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    }
                </table>
            </div>
        </>
    )
}

export default Home