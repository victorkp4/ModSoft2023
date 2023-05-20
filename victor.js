// Importaciones de librerías y clases necesarias
const {request, response } = require('express')

    // Se buscan todos las capas que esten dadas de alta a traves de una solicitud get
    const alumnoGet = async(req = request, res = response) => {
        try {

            res.json({ "Nombre del Alumno": ["Abalos Victor"]});
    
            } catch(error) {
                console.error(error)
            }
    }
        
    // Se exportan los metodos necesarios
    module.exports = {
        alumnoGet,       
    }
