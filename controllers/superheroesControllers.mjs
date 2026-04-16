//La capa de controladores gestiona las solicitudes del cliente y llama
//a la capa de servicios para realizar las operaciones necesarias

import { obtenerTodosLosSuperheroes, crearSuperHeroe, actualizarSuperHeroe}
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
export async function crearSuperHeroeController(req, res) {
    try {
        const superheroe = req.body;
        const nuevoSuperheroe = await crearSuperHeroe(superheroe);
        
        // Respondemos con el objeto creado y un código 201 (Creado)
        res.status(201).send({
            mensaje: 'Superhéroe creado con éxito',
            datos: nuevoSuperheroe
        });
    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al crear el superhéroe',
            error: error.message
        });
    }
}
export async function actualizarSuperHeroeController(req, res) {
    try {
        const{id}=req.params;
        const datosActualizados= req.body;
        const superHeroeActualizado = await actualizarSuperHeroe({id}, datosActualizados);
        
        // Respondemos con el objeto creado y un código 201 (Creado)
        res.status(201).send({
            mensaje: 'Superhéroe actualizado con éxito',
            datos: superHeroeActualizado
        });
    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al actualizar el superhéroe',
            error: error.message
        });
    }
}



