const { REACT_APP_SERVER_URL } = process.env;

export const getAllTracks = async () => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/albums`);
  return await response.json();
};

export const getAlbumById = async (id) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/albums/${id}`);
  return await response.json();
};

export const getAlbumsByIds = async (albumsIds) => {
  if (albumsIds.length > 0) {
    const notRepitedAlbum = [...new Set(albumsIds)];
    const albums = await Promise.all(
      notRepitedAlbum.map(async (id) => await getAlbumById(id)),
    );
    return albums;
  } else {
    return [];
  }
};
