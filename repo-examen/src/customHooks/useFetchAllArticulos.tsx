import { useEffect, useState } from "react"
import { Articulo } from "../interfaces/Articulo"
import { getOneArtByCodigo } from "../api/llamadasApi"


export const useFetchAllArticulos = () => {
    const [articulos, setArticulos] = useState<Articulo[]>([])
    const [loading, setLoading] = useState(true)

    const obtenerArticulos = async () => {
        const datos: Articulo[] = await getOneArtByCodigo("")
        setArticulos(datos)
    }

    useEffect( () => {
        obtenerArticulos()
        .finally(() => setLoading(false))
    })

    return {articulos, loading}
}