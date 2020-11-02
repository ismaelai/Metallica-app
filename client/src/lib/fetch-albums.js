export const getAllAlbums = async () => {
  const response = await fetch(`/albums`);
  return await response.json();
};
