import express from 'express'

import {
  createPlaylist,
  deletePlaylistById,
  getPlaylistById,
  listgetAllPlaylist,
  // listPlaylist,
  updatePlaylistById,
} from '../controllers/playlist.js';

// CRUD to playlist songs,
const PlaylistRouter = express.Router();

// List all music album resources. 
PlaylistRouter.get('/playlist', listgetAllPlaylist);
// List a music resource
PlaylistRouter.get('/playlist/:id', getPlaylistById);
// Create
PlaylistRouter.post('/playlist', createPlaylist);
// Update
PlaylistRouter.put('/playlist/:id', updatePlaylistById);
// Delete
PlaylistRouter.delete('/playlist/:id', deletePlaylistById);

export default PlaylistRouter;