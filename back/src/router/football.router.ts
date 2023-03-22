import express = require('express')
import HttpStatusCode from '../constant'
import { createClub, deleteClubById, getAllClubs, getClubById, updateClubById } from '../services/football.service'
import Football from '../types/football'

const footballRouter = express.Router()

footballRouter.post('/', async (req, res) => {
  const club: Football = req.body
  const newClub = await createClub(club)
  res.status(HttpStatusCode.CREATED).json(newClub)
})

footballRouter.get('/', async (req, res) => {
  const allClubs = await getAllClubs()
  res.status(HttpStatusCode.OK).json(allClubs)
})

footballRouter.get('/:clubId', async (req, res) => {
  const clubId = Number(req.params.clubId)
  const club = await getClubById(clubId)
  res.status(HttpStatusCode.OK).json(club)
})

footballRouter.put('/:clubId', async (req, res) => {
  const clubId = Number(req.params.clubId)
  const club: Football= req.body
  const numberOfRowUpdated = await updateClubById(clubId, club)
  res.status(HttpStatusCode.CREATED).json(`${numberOfRowUpdated} row(s) updated`)
})

footballRouter.delete('/:clubId', async (req, res) => {
  const clubId = Number(req.params.clubId)
  const numberOfRowDeleted = await deleteClubById(clubId)
  res.status(HttpStatusCode.OK).json(`${numberOfRowDeleted} row(s) deleted`)
})

export default footballRouter
