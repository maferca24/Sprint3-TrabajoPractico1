//Define las rutas necesarias para cada operación del controlador
//La capa de ruta define los endpoints y mapea cada uno a su respectivo controlador
//permitiendo que las solicitudes HTTP se manejen de forma estructurada y predecible


import express from 'express';
import {
    obtenerTodosLosSuperheroesController
} from '../controllers/superheroesControllers.mjs';

const router = express.Router();

//Rutas fijas:
//Todos los superheroes
//http://localhost:3000/api/heroes
router.get('/heroes', obtenerTodosLosSuperheroesController);

export default router;
