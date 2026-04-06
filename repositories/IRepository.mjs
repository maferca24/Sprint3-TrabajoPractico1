//IRepository.mjs
//Establece una interfaz que define los médtodos CRUD estándar y sirmve como contrao para 
//asegurar que caulquier clase que implemente la interfaz cuente con estos métodos

class IRepository {
    obtenerTodos() {
        throw new Error("Método 'obtenerTodos()' no implementado");

    }
}
export default IRepository;

