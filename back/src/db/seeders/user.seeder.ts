import { QueryInterface } from 'sequelize/types'
import { UserColumn, userTableName } from '../db.constants'

const lines: UserColumn[] = [
  {
    id: 1,
    username: '\\x5edfa2692bdacc5e6ee805c626c50cb44cebb065f092d9a1067d89f74dacd326',
    password: '\\x8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'
  }
]

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert(userTableName, lines)
}

export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.dropTable(userTableName)
}
