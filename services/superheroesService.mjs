//Capa de Servicios: Contiene la lógica de negocio
//se encarga de validar y transformar los datos cuando sea necesario

import superHeroRepository from '../repositories/SuperHeroRepository.mjs';


export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos();
}
export async function crearSuperHeroe(superheroe) {
    // Aquí podrías poner lógica de negocio (ej: validar edad mínima)
    return await repository.crearSuperHeroe(superheroe);
}

