const { REACT_APP_SERVER_URL } = process.env;

export const getAllAlbums = async () => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/albums`);
  return await response.json();
};

export const getAlbumById = async (id) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/albums/${id}`);
  return await response.json();
};

export const getAlbumsByIds = async (albumsIds) => {
  const notRepitedAlbum = [...new Set(albumsIds)];
  const albums = await Promise.all(
    notRepitedAlbum.map(async (id) => await getAlbumById(id)),
  );
  console.log({ albums });
  return albums;
};
