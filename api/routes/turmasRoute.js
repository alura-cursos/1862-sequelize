const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')
 
const router = Router()
router
  .get('/turmas', TurmaController.pegaTodasAsTurmas) //ok
  .get('/turmas/:id', TurmaController.pegaTurma) //ok
  .post('/turmas', TurmaController.criaTurma) //ok
  .post('/turmas/:id/restaura', TurmaController.restauraTurma) //ok
  .put('/turmas/:id', TurmaController.atualizaTurma) //ok
  .delete('/turmas/:id', TurmaController.apagaTurma) //ok
module.exports = router