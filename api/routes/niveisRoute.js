const { Router } = require('express')
const NivelController = require('../controllers/NivelController')
 
const router = Router()
router
  .get('/niveis', NivelController.pegaTodosOsNiveis)
  .get('/niveis/:id', NivelController.pegaUmNivel)
  .post('/niveis', NivelController.criaNivel)
  .put('/niveis/:id', NivelController.atualizaNivel)
  .delete('/niveis/:id', NivelController.apagaNivel)
module.exports = router