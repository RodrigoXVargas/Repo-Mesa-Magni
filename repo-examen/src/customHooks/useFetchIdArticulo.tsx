import { useCallback, useEffect, useState } from "react"
import { Articulo } from "../interfaces/Articulo"
import { getOneArt } from "../api/llamadasApi"


export const useFetchIdArticulos = (id: string) => {
    
    const [articulo, setArticulo] = useState<Articulo>({
        id: "",
        codigo: "",
        denominacion: "",
        precio: "",
        idrubro: "",
    })

    const buscarArticulo = useCallback(async () => {
        if (id === undefined || id === '0') {
            return
        }
        const datos: Articulo = await getOneArt(id)

        setArticulo(datos)
    }, [id])

    useEffect(() => {
        buscarArticulo()
    }, [buscarArticulo])

    return { articulo, setArticulo }
}