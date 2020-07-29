const { Router } = require('express')
const NivelController = require('../controllers/NivelController')
 
const router = Router()
router
  .get('/niveis', NivelController.pegaTodosOsNiveis) //ok
  .get('/niveis/:id', NivelController.pegaNivel) //ok
  .post('/niveis', NivelController.criaNivel) //ok
  .post('/niveis/:id/restaura', NivelController.restauraNivel) //ok
  .put('/niveis/:id', NivelController.atualizaNivel) //ok
  .delete('/niveis/:id', NivelController.apagaNivel) //ok
module.exports = router