import express = require('express')
import HttpStatusCode from '../constant'
import { createClub, deleteClubById, getAllClubs, getClubById, updateClubById } from '../services/football.service'
import Football from '../types/football'

const footballRouter = express.Router()

footballRouter.post('/', async (req, res) => {
  const club: Football = req.body
  const newClub = await createClub(club)
  return res.status(HttpStatusCode.CREATED).json(newClub)
})

footballRouter.get('/', async (req, res) => {
  const allClubs = await getAllClubs()
  return res.status(HttpStatusCode.OK).json(allClubs)
})

footballRouter.get('/:clubId', async (req, res) => {
  const clubId = Number(req.params.clubId)
  const club = await getClubById(clubId)
  return res.status(HttpStatusCode.OK).json(club)
})

footballRouter.put('/:clubId', async (req, res) => {
  const clubId = Number(req.params.clubId)
  const club = req.body
  const numberOfRowUpdated = await updateClubById(clubId, club)
  return res.status(HttpStatusCode.CREATED).json(`${numberOfRowUpdated} row(s) updated`)
})


export default footballRouter
