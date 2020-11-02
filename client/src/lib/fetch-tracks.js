const { REACT_APP_SERVER_URL } = process.env;

export const getAllAlbums = async () => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/playlist`);
  console.log({ getAllAlbums });
  return await response.json();
};

export const getTrackById = async (id) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/playlist/${id}`);
  return await response.json();
};

// export const getTracksByIds = async (albumsIds) => {
//   if (albumsIds.length > 0) {
//     const notRepitedAlbum = [...new Set(albumsIds)];
//     const albums = await Promise.all(
//       notRepitedAlbum.map(async (id) => await getAlbumById(id)),
//     );
//     return albums;
//   } else {
//     return [];
//   }
// };
