import { QueryInterface } from 'sequelize/types'


import { footballColumns, footballTableName, userColumns, userTableName } from '../db.constants'

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.createTable(footballTableName, footballColumns)
  await queryInterface.createTable(userTableName, userColumns)
}

export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.dropTable(footballTableName)
  await queryInterface.dropTable(userTableName)
}
