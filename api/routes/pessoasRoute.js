const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoas) //ok
  .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas) //ok
  .get('/pessoas/:id', PessoaController.pegaPessoa) //ok
  .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas) //ok
  .get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula) //ok
  .get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma) //ok
  .get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas) //ok
  .post('/pessoas', PessoaController.criaPessoa) //ok
  .post('/pessoas/:id/restaura', PessoaController.restauraPessoa) //ok
  .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa) //ok
  .post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula) //ok
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula) //ok
  .put('/pessoas/:id', PessoaController.atualizaPessoa) //ok
  .put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula) //ok
  .delete('/pessoas/:id', PessoaController.apagaPessoa) //ok
  .delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.apagaMatricula) //ok


module.exports = router