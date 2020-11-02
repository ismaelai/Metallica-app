import mongoose from 'mongoose';

const AlbumsSchema = new mongoose.Schema(
  {
    name: String,
    year: Number,
    bandMembers: [String],
    className: String,
    tracks: [
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
  },
  {
    timestamps: true,
  },
);

const Albums = mongoose.model('Albums', AlbumsSchema);

export default Albums;

export const getAllAlbums = async () => {
  try {
    return await Albums.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const getAlbumsResourceById = async (id) => {
  try {
    return await Albums.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const createAlbumsResource = async (data) => {
  try {
    return await Albums.create({ ...data });  //que traiga la data del id-
  } catch (error) {
    throw new Error(error);
  }
};

export const updateAlbumsResource = async (id, data) => {
  try {
    return await Albums.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteAlbumsResource = async (id) => {
  try {
    return await Albums.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};
