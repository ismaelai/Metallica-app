import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema({
  userName: String,
  favoriteTracks: [
    {
      title: String,
      album: String,
      duration: String,
      format: String,
      preview: {
        soundCloudPlayer: String,
        soundCloudUser: String,
        soundCloudSong: String,
      },
    },
  ],
});

const Playlist = mongoose.model('Playlist', playlistSchema);
export default Playlist;

export const getAllPlaylist = async () => {
  try {
    return await Playlist.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const getPlaylistResourceById = async (id) => {
  try {
    return await Playlist.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const createPlaylistResource = async (data) => {
  try {
    return await Playlist.create({ ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const updatePlaylistResource = async (id, data) => {
  try {
    return await Playlist.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const deletePlaylistResource = async (id) => {
  try {
    return await Playlist.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};
