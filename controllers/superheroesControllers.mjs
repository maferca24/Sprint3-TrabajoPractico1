//La capa de controladores gestiona las solicitudes del cliente y llama
//a la capa de servicios para realizar las operaciones necesarias

import { obtenerTodosLosSuperheroes}
    from "../services/superheroesService.mjs";

import { renderizarListaSuperheroes }
    from '../views/responseViews.mjs'

export async function obtenerTodosLosSuperheroesController(req, res) {

    try {
        const superheroes = await obtenerTodosLosSuperheroes();
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);

    } catch (error) {

        res.status(500).send({
            mensaje: 'Error al obtener los superheroes',

            error: error.message
        });
    }
}

