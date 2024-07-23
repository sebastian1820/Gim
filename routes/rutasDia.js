const express = require('express');
const router = express.Router();
const DiaController = require ('../controllers/DiaController');

// esta son las rutas del nuestro crud

//router.post ('/',ProveedorController.agregarProveedor);
//router.get ('/:id',ProveedorController.buscarProveedor);
router.get ('/',DiaController.buscarDia);
//router.delete ('/:id',ProveedorController.eliminarProveedor);
//router.put ('/:id',ProveedorController.actualizarProveedor);




module .exports = router; 