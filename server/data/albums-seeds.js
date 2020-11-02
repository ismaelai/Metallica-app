import mongoose from 'mongoose';
import { databaseURI } from '../index.js';
import albums from './albums.js';
import Albums, { getAllAlbums } from '../models/albums.js';

mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Promise.all(
  albums.map(async (album) => {
    const albumResource = await Albums.create({ ...album });
    console.log(
      `The resource ${JSON.stringify(albumResource)} has been created`,
    );
  }),
);
