import mongoose from 'mongoose';
import { databaseURI } from '../index.js';
import playlist from './playlist.js';

import Playlist, { getAllPlaylist } from '../models/playlist.js';

mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Promise.all(
  playlist.map(async (favorites) => {
    const favoritesList = await Playlist.create({ ...favorites });
    console.log(
      `The resource ${JSON.stringify(favoritesList)} has been created`,
    );
  }),
);
