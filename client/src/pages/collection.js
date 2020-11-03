import React, { useState, useEffect } from 'react';
import { getAlbumsByIds } from '../lib/fetch-albums.js';
import { useLocalStorage } from '../lib/local-storage-hook.js';

const Collection = () => {
  const [collection, _setCollection] = useLocalStorage('userCollection', []);
  const [albums, setAlbums] = useState([]);
  const [isClicked, setisClicked] = useState(false);
  const [albumToRenderIndex, setAlbumToRender] = useState(-1);

  const fetchAlbums = async () => {
    const albumsData = await getAlbumsByIds(collection);
    setAlbums(albumsData);
  };

  const handleClick = (event) => {
    const index = albums.findIndex(x => x.name === event.target.innerHTML)
    console.log(index)
    setAlbumToRender(index)
    setisClicked(true)
    console.log(albumToRenderIndex)
  }

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <main className="collection">
      <h2>Collection page</h2>

      <section>
        {albums.map((album) => {
          return (
            <article onClick={handleClick} key={album._id}>
              <h3>{album.name}</h3>
            </article>
          );
        })}
        {isClicked &&
        <>
          <h1>{albums[albumToRenderIndex].name}</h1>
          <h2>{albums[albumToRenderIndex].year}</h2>
        </> 
        }
      </section>
    </main>
  );
};

export default Collection;
