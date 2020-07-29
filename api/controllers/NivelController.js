const Services = require('../services/Services')
const niveisServices = new Services('Niveis')

class NivelController {
  static async pegaTodosOsNiveis(req, res){ //ok
    try {
      const todosOsNiveis = await niveisServices.pegaTodosOsRegistros()
      return res.status(200).json(todosOsNiveis)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaNivel(req, res) { //ok
    const { id } = req.params
    try {
      const nivel = await niveisServices.pegaUmRegistro({ id })
      return res.status(200).json(nivel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaNivel(req, res) { //ok
    const novoNivel = req.body
    try {
      const novoNivelCriado = await niveisServices.criaRegistro(novoNivel)
      return res.status(200).json(novoNivelCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaNivel(req, res) { //ok
    const { id } = req.params
    const novasInfos = req.body
    try {
      await niveisServices.atualizaRegistro(novasInfos, id)
      return res.status(200).json({ mensagem: `id ${id} atualizado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaNivel(req, res) { //ok
    const { id } = req.params
    try {
      await niveisServices.apagaRegistro(id)
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restauraNivel(req, res) { //ok
    const { id } = req.params
    try {
      await niveisServices.restauraRegistro(id)
      return res.status(200).json({ mensagem: `id ${id} restaurado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = NivelController