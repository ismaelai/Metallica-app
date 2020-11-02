import React, { useState, useEffect } from 'react';
import { getAlbumsByIds } from '../lib/fetch-albums.js';
import { useLocalStorage } from '../lib/local-storage-hook.js';

const Collection = () => {
  const [collection, _setCollection] = useLocalStorage('userCollection', []);

  const [albums, setAlbums] = useState([]);

  const fetchAlbums = async () => {
    const albumsData = await getAlbumsByIds(collection);
    setAlbums(albumsData);
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <main className="collection">
      <h2>Collection page</h2>

      <section>
        {albums.map((album) => {
          return (
            <article key={album._id}>
              <h3>{album.name}</h3>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Collection;
