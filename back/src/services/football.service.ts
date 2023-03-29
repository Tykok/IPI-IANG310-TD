import FootballModel from "../db/models/football.model"
import Football from "../types/football"
// import Football from "../types/football"

export const getAllClubs = async () => {
  return FootballModel.findAll()
}

export const getClubById = async (clubId: number) => {
  return FootballModel.findByPk(clubId)
}

export const updateClubById = async (clubId: number, club: Object) => {
  return FootballModel.update(club, { where: { id: clubId } })
}

export const deleteClubById = async (clubId: number) => {
  return FootballModel.destroy({ where: { id: clubId } })
}

export const createClub = async (club: Football) => {
  return FootballModel.create(club)
}