let visitados = require('../data/datosProductos');

let homeController = {
    leerTodos: function () {
        console.log ('Leo productos desde data');
        return visitados;
    }
}

module.exports = homeController;