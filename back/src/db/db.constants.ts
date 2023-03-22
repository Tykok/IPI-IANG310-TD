import { DataTypes } from 'sequelize'

export const defaultSchema = 'public'

/**
 * USER TABLE CONSTANTS
 */

export type UserColumn = {
  id: number
  username: string
  password: string
}

export const userColumns = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

export const userTableName = 'user'
export const userModelName = 'user'


export type FootballColumns = {
  id: number
name: string
city: string
country: string
stadium: string
logo: string
isActive: boolean
}

export const footballTableName = 'football'
export const footballModelName = 'football'

export const footballColumns = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stadium: {
    type: DataTypes.STRING,
    allowNull: false
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}

