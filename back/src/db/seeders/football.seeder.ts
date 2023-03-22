import { QueryInterface } from 'sequelize/types'
import { FootballColumns, footballTableName } from '../db.constants'

const lines: FootballColumns[] = [
  {
    id: 1,
    name: 'Toulouse FC',
    city: 'Toulouse',
    country: 'France',
    stadium: 'Stadium Municipal',
    logo: 'https://upload.wikimedia.org/wikipedia/fr/8/8b/Logo_Toulouse_FC_2018.svg',
    isActive: true
  },
  {
    id: 2,
    name: 'Monaco',
    city: 'Monaco',
    country: 'France',
    stadium: 'Stade Louis II',

    logo: 'https://upload.wikimedia.org/wikipedia/fr/5/58/Logo_AS_Monaco_FC_-_2021.svg',
    isActive: true
  },
  {
    id: 3,
    name: 'Olympique Marseille',
    city: 'Marseille',
    country: 'France',
    stadium: 'Stade Vélodrome',
    logo: 'https://upload.wikimedia.org/wikipedia/fr/4/43/Logo_Olympique_de_Marseille.svg',
    isActive: true
  }
]

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert(footballTableName, lines)
}

export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.dropTable(footballTableName)
}
