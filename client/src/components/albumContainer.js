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
        console.log(album)
        return (
          <article key={album._id} className="album">
            <button onClick={handleClick} id={album._id} className="favorite">
              ADD TO COLLECTION
            </button>
            <div className={album.className}></div>
            <h4>{album.name}</h4>
          </article>
        );
      })}
    </>
  );
};

export default AlbumContainer;
