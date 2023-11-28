import { useEffect, useState } from "react"
import { Rubro } from "../interfaces/Rubro"
import { getAllRubros } from "../api/llamadasApi"

export const useFetchAllRubros = () => {
    const [rubros, setRubros] = useState<Rubro[]>([])

    const obtenerRubros = async () => {
        const datos: Rubro[] = await getAllRubros()
        setRubros(datos)
    }

    useEffect(() => {
        obtenerRubros()
        
    }, [])

    return {rubros}
}