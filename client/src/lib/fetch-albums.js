const { REACT_APP_SERVER_URL } = process.env;

export const getAllAlbums = async () => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/albums`);
  return await response.json();
};

export const getAlbumsByIds = async (albumsIds) => {
  console.log({ albumsIds });
};
