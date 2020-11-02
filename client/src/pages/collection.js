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
    console.log({ albums });
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
    <main className="container-collection">
      <div className="left">
        <h3>USER:</h3>
        <h4>Username</h4>
      </div>
      <section className="wrapper-collection">
        <div className="title">
          <h3>ALBUM</h3>
          <h3>YEAR</h3>
        </div>
        {albums.map((album) => {
          return (
            <article onClick={handleClick} key={album._id}>
              <h3>{album.name}</h3>
              <h3>{album.year}</h3>
              <button type="submit" className="favorite">
                EDIT
              </button>
              <button type="submit" className="favorite">
                DELETE
              </button>
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
      <div className="right"></div>
    </main>
  );
};

export default Collection;
