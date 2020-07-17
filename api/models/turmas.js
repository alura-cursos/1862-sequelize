'use strict'
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
    data_inicio: DataTypes.DATEONLY
  }, { paranoid: true })
  Turmas.associate = function(models) {
    Turmas.hasMany(models.Matriculas, {
      foreignKey: 'turma_id'
    })
    Turmas.belongsTo(models.Pessoas, {
      foreignKey: 'docente_id'
    })
    Turmas.belongsTo(models.Niveis, {
      foreignKey: 'nivel_id'
    })
  }
  return Turmas
}