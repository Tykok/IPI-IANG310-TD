import { Model } from 'sequelize'
import sequelizeConnection from '../connexion'
import { defaultSchema, footballColumns, footballModelName, footballTableName } from '../db.constants'

const sequelize = sequelizeConnection

class FootballModel extends Model {}

FootballModel.init(footballColumns, {
  sequelize,
  schema: defaultSchema,
  modelName: footballTableName,
  tableName: footballModelName,
  timestamps: false
})


export default FootballModel
