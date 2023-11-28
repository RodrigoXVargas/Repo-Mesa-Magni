import { Articulo } from "../interfaces/Articulo";

export async function getAllRubros() {
    const urlServer = "http://168.194.207.98:8081/api_articulo/get_rubros.php";
    const response = await fetch(urlServer, {
        method: 'GET',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    
    return await response.json();
}

export async function getAllArtByRubro(idRubro: string) {
    const urlServer = "http://168.194.207.98:8081/api_articulo/get_articulos_por_rubro.php?idrubro=" + idRubro;
    const response = await fetch(urlServer, {
        method: 'GET',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    return await response.json();
}


export async function getOneArt(idArticulo: string) {
    const urlServer = "http://168.194.207.98:8081/api_articulo/get_articulo.php?id=" + idArticulo;
    const response = await fetch(urlServer, {
        method: 'GET',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    return await response.json();
}

export async function getOneArtByCodigo(codigoArticulo: string) {
    const urlServer = "http://168.194.207.98:8081/api_articulo/get_articulos_por_codigo.php?codigo=" + codigoArticulo;
    const response = await fetch(urlServer, {
        method: 'GET',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    return await response.json();
}



//save or update
export async function saveOrUpdate(objeto: Articulo) {
    if (objeto.id === undefined) return

    let urlServer: string = '';
    let methodM: string = "";
    if (objeto.id === '') {
        urlServer = 'http://168.194.207.98:8081/api_articulo/post_articulo.php';
        methodM = "POST";
    } else {
        urlServer = 'http://168.194.207.98:8081/api_articulo/put_articulo.php';
        methodM = "PUT";
    }

    const response = await fetch(urlServer, {
        method: methodM,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objeto),
        mode: 'cors'
    });
    return await response.json();
}

//delete
export async function deleteById(id: string) {
    const urlServer = "http://168.194.207.98:8081/api_articulo/delete_articulo.php?id=" + id;
    const response = await fetch(urlServer, {
        method: 'DELETE',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    return await response.json();
}