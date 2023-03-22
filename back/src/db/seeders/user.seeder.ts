import { QueryInterface } from 'sequelize/types'
import { UserColumn, userTableName } from '../db.constants'

const lines: UserColumn[] = [
  {
    id: 1,
    username: '\\x8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
    password: '\\x8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'
  }
]

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert(userTableName, lines)
}

export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.dropTable(userTableName)
}
