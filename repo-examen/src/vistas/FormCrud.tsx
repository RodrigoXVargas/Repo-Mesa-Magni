import { useParams } from "react-router-dom"
import { ChangeEvent } from "react"
import { getOneArtByCodigo, saveOrUpdate } from "../api/llamadasApi"
import { Articulo } from "../interfaces/Articulo"
import { Rubro } from "../interfaces/Rubro"
import { useFetchAllRubros } from "../customHooks/useFetchAllRubros"
import { useFetchIdArticulos } from "../customHooks/useFetchIdArticulo"


function FormCrud() {
    const { id } = useParams()
    const { rubros } = useFetchAllRubros()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { articulo, setArticulo } = id ? useFetchIdArticulos(id) : useFetchIdArticulos('0')

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setArticulo((prevArticulo) => ({
            ...prevArticulo,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const dato: Articulo[] = await getOneArtByCodigo(articulo.codigo)
        if (dato.length !== 0 && articulo.id === "0") {
            alert('el codigo exite')
        } else {
            console.log(articulo)
            saveOrUpdate(articulo)
                .then((response) => {
                    console.log(response)
                    alert('Se guardo el codigo: ' + articulo.codigo)
                    window.location.href = 'http://localhost:5173/crud'
                })
                .catch((error) => {
                    alert('Hubo un error en el guardado del contacto')
                    console.log(error)
                })

        }

    }

    return (
        <>
            <div className="container-Form">
                <form className="form-crud" action="" onSubmit={handleSubmit}>
                    <label className="label-Crud" htmlFor="">ID</label>
                    <input className="input-Crud" type="number" name="id" value={articulo.id} onChange={handleChange} disabled />

                    <label className="label-Crud" htmlFor="">denominacion</label>
                    <input className="input-Crud" type="text" name="denominacion" value={articulo.denominacion} onChange={handleChange} />

                    <label className="label-Crud" htmlFor="">codigo</label>
                    {articulo.id === "" &&
                        <input className="input-Crud" type="text" name="codigo" value={articulo.codigo} onChange={handleChange} />
                    }
                    {articulo.id !== "" &&
                        <input className="input-Crud" type="text" name="codigo" value={articulo.codigo} onChange={handleChange} disabled />
                    }

                    <label className="label-Crud" htmlFor="">precio</label>
                    <input className="input-Crud" type="number" name="precio" value={articulo.precio} onChange={handleChange} />

                    <label className="label-Crud" htmlFor="">Id Rubro</label>
                    <select value={articulo.idrubro} name="idrubro" onChange={handleChange}>
                        <option value="nada">Seleccione un rubro</option>
                        {rubros.map((rubro: Rubro) => (
                            <option key={rubro.id} value={rubro.id}>{rubro.denominacion}</option>
                        ))}
                    </select>

                    <button className="btn btn-secondary">Guardar</button>
                </form>
            </div>
        </>
    )
}

export default FormCrud