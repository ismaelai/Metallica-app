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
     event.preventDefault();
     const index = albums.findIndex((x) => x.name === event.target.innerHTML);
     if (index === -1) return null
     setAlbumToRender(index);
     setisClicked(true);
   };

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
            <article
              key={album._id}
              onClick={handleClick}
              className="album-row"
              value={album.name}
            >
              <h3 value={album.name}>{album.name}</h3>
              <h3 value={album.name}>{album.year}</h3>
              <button type="submit" className="favorite">
                EDIT
              </button>
              <button type="submit" className="favorite">
                DELETE
              </button>
            </article>
          );
        })}
        {isClicked && (
          <section className="wrapper-album">
            <div className={albums[albumToRenderIndex].className}></div>
            <h1>{albums[albumToRenderIndex].name}</h1>
            <h2>{albums[albumToRenderIndex].year}</h2>
            <h2>{albums[albumToRenderIndex].bandMembers}</h2>
            <div className="wrapper-track">
              {albums[albumToRenderIndex].tracks.map((track) => {
                return (
                  <>
                <h2>{track.title}</h2>
                <h2>{track.duration}</h2>
                </>
                )
              })}
            </div>
          </section>
        )}
      </section>
      <div className="right"></div>
    </main>
  );
};

export default Collection;
