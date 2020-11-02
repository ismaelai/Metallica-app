import express from 'express';
import {
  createAlbums,
  deleteAlbumsById,
  getAlbumsById,
  listgetAllAlbums,
  // listAlbums,
  updateAlbumsById,
} from '../controllers/albums.js';

// CRUD to Albums
const AlbumsRouter = express.Router();

// NOTE: Always routes called controllers

// List all music album resources.
AlbumsRouter.get('/albums', listgetAllAlbums);
// List a Albums resource
AlbumsRouter.get('/albums/:id', getAlbumsById);
// Create
AlbumsRouter.post('/albums', createAlbums); //con errror-crea un array vacio-
// Update
AlbumsRouter.put('/albums/:id', updateAlbumsById);
// Delete
AlbumsRouter.delete('/albums/:id', deleteAlbumsById);

export default AlbumsRouter;
