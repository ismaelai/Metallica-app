export const getAllAlbums = async () => {
  const response = await fetch(`http://localhost:5000/albums`);
  return await response.json();
};
