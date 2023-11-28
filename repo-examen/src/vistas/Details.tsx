import { useParams } from "react-router-dom"
import { useFetchIdArticulos } from "../customHooks/useFetchIdArticulo"



function Details() {
    const { id } = useParams()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {articulo} = id ? useFetchIdArticulos(id) : useFetchIdArticulos('0')

    return (
        <>
            <label className="label-Crud" htmlFor="">ID</label>
            <input className="input-Crud" type="number" name="id" value={articulo?.id} disabled />

            <label className="label-Crud" htmlFor="">denominacion</label>
            <input className="input-Crud" type="text" name="denominacion" value={articulo?.denominacion} disabled />

            <label className="label-Crud" htmlFor="">codigo</label>
            <input className="input-Crud" type="text" name="codigo" value={articulo?.codigo} disabled />

            <label className="label-Crud" htmlFor="">precio</label>
            <input className="input-Crud" type="number" name="precio" value={articulo?.precio} disabled />

            <label className="label-Crud" htmlFor="">Id Rubro</label>
            <input className="input-Crud" type="number" name="idrubro" value={articulo?.idrubro} disabled />
        </>
    )
}

export default Details
