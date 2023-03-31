import { QueryInterface } from 'sequelize/types'
import { FootballColumns, footballTableName } from '../db.constants'

const lines: FootballColumns[] = [
  {
    id: 1,
    name: "Real Madrid CF",
    city: "Madrid",
    country: "Espagne",
    stadium: "Santiago Bernabeu",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/langfr-260px-Logo_Real_Madrid.svg.png",
    isActive: true
  },
  {
    id: 2,
    name: "FC Barcelona",
    city: "Barcelona",
    country: "Espagne",
    stadium: "Camp Nou",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_FC_Barcelona.svg/langfr-1280px-Logo_FC_Barcelona.svg.png",
    isActive: true
  },
  {
    id: 3,
    name: "Manchester United FC",
    city: "Manchester",
    country: "Angletterre",
    stadium: "Old Trafford",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b9/Logo_Manchester_United.svg/langfr-1280px-Logo_Manchester_United.svg.png",
    isActive: true
  },
  {
    id: 4,
    name: "Liverpool FC",
    city: "Liverpool",
    country: "Angletterre",
    stadium: "Anfield",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/54/Logo_FC_Liverpool.svg/langfr-1024px-Logo_FC_Liverpool.svg.png",
    isActive: true
  },
  {
    id: 5,
    name: "FC Bayern Munich",
    city: "Munich",
    country: "Allemagne",
    stadium: "Allianz Arena",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/langfr-1920px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
    isActive: true
  },
  {
    id: 6,
    name: "Borussia Dortmund",
    city: "Dortmund",
    country: "Allemagne",
    stadium: "Signal Iduna Park",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/langfr-1920px-Borussia_Dortmund_logo.svg.png",
    isActive: true
  },
  {
    id: 7,
    name: "Paris Saint-Germain FC",
    city: "Paris",
    country: "France",
    stadium: "Parc des Princes",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/langfr-1920px-Paris_Saint-Germain_Logo.svg.png",
    isActive: true
  },
  {
    id: 8,
    name: "Olympique de Marseille",
    city: "Marseille",
    country: "France",
    stadium: "Orange Vélodrome",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/langfr-1024px-Logo_Olympique_de_Marseille.svg.png",
    isActive: true
  },
  {
    id: 9,
    name: "AC Milan",
    city: "Milan",
    country: "Italie",
    stadium: "San Siro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/langfr-260px-Logo_of_AC_Milan.svg.png",
    isActive: true
  },
  {
    id: 10,
    name: "Juventus FC",
    city: "Turin",
    country: "Italie",
    stadium: "Allianz Stadium",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juventus_FC_2017_icon_%28black%29.svg/langfr-260px-Juventus_FC_2017_icon_%28black%29.svg.png",
    isActive: true
  },
  {
    id: 11,
    name: "SL Benfica",
    city: "Lisbonne",
    country: "Portugal",
    stadium: "Estádio da Luz",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a2/SL_Benfica_logo.svg/langfr-1920px-SL_Benfica_logo.svg.png",
    isActive: true
  },
  {
    id: 12,
    name: "Sporting CP",
    city: "Lisbonne",
    country: "Portugal",
    stadium: "Estádio de Alvalade",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/12/Logo_Sporting_Clube_Portugal.svg/langfr-1024px-Logo_Sporting_Clube_Portugal.svg.png",
    isActive: true
  },
  {
    id: 13,
    name: "Ajax Amsterdam",
    city: "Amsterdam",
    country: "Pays Bas",
    stadium: "Johan Cruyff Arena",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/77/Ajax_Amsterdam_Logo.svg/langfr-1920px-Ajax_Amsterdam_Logo.svg.png",
    isActive: true
  },
  {
    id: 14,
    name: "PSV Eindhoven",
    city: "Eindhoven",
    country: "Pays-Bas",
    stadium: "Philips Stadion",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/0/0d/Logo_psv_eindhoven.svg/langfr-1920px-Logo_psv_eindhoven.svg.png",
    isActive: true
  },
  {
    id: 15,
    name: "Galatasaray SK",
    city: "Istanbul",
    country: "Turquie",
    stadium: "Nef Stadyumu",
    logo: "https://upload.wikimedia.org/wikipedia/fr/0/04/Logo-Galatasaray.png",
    isActive: true
  },
  {
    id: 16,
    name: "Fenerbahçe SK",
    city: "Istanbul",
    country: "Turquie",
    stadium: "Stade Şükrü Saracoğlu",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/37/Logo_de_Fenerbah%C3%A7e_%281929%29.svg/langfr-1920px-Logo_de_Fenerbah%C3%A7e_%281929%29.svg.png",
    isActive: true
  }
]

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert(footballTableName, lines)
}

export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.dropTable(footballTableName)
}
