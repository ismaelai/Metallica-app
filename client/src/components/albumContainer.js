import { useLocalStorage } from '../lib/local-storage-hook.js';

const AlbumContainer = ({ albums }) => {
  const [collection, setCollection] = useLocalStorage('userCollection', []);

  const handleClick = (event) => {
    event.preventDefault();
    const {
      currentTarget: { id },
    } = event;
    const newCollection = [...collection, id];
    setCollection(newCollection);
  };

  return (
    <>
      {albums.map((album) => {
        return (
          <article key={album._id}>
            <h5>{album.name}</h5>
            <button onClick={handleClick} id={album._id}>
              Add Collections
            </button>
          </article>
        );
      })}
    </>
  );
};

export default AlbumContainer;
