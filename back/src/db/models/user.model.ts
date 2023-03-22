import { Model, QueryTypes } from 'sequelize'
import sequelizeConnection from '../connexion'
import { defaultSchema, userColumns, userModelName, userTableName } from '../db.constants'

const sequelize = sequelizeConnection

class UserModel extends Model {
  /**
   * This function hash with SHA256 the value given
   * @param {String} value The value needed to be Hash
   * @returns {Promise<String>} Return the Hashed value
   */
  static async sha256(value: string): Promise<{ hash: string; not_hash: string }> {
    const sha256 = (await sequelize.query(`SELECT CAST(SHA256('${value}') AS CHARACTER VARYING) AS hash, '${value}' as not_hash`, {
      // eslint-disable-next-line no-console
      logging: process.env.NODE_ENV === 'DEBUG' ? console.log : false,
      plain: true,
      raw: false,
      type: QueryTypes.SELECT
    })) as { hash: string; not_hash: string }
    return sha256
  }
}

UserModel.init(userColumns, {
  sequelize,
  schema: defaultSchema,
  modelName: userModelName,
  tableName: userTableName,
  timestamps: false,
  hooks: {
    beforeFind: async (request: any) => {
      if (request.where.username !== undefined && request.where.password !== undefined) {
        const usernameHash = await UserModel.sha256(request.where.username)
        const passwordHash = await UserModel.sha256(request.where.password)
        request.where = { username: usernameHash.hash, password: passwordHash.hash }
      }
    }
  }
})

export default UserModel
