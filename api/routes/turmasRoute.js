const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')
 
const router = Router()
router
  .get('/turmas', TurmaController.pegaTodasAsTurmas)  
  .get('/turmas/:id', TurmaController.pegaTurma)  
  .post('/turmas', TurmaController.criaTurma)  
  .post('/turmas/:id/restaura', TurmaController.restauraTurma)  
  .put('/turmas/:id', TurmaController.atualizaTurma)  
  .delete('/turmas/:id', TurmaController.apagaTurma)  
module.exports = router