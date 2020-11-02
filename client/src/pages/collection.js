import React, { useState, useEffect } from 'react';
import { getAlbumsByIds } from '../lib/fetch-albums.js';
import { useLocalStorage } from '../lib/local-storage-hook.js';

const Collection = () => {
  const [collection, setCollection] = useLocalStorage('userCollection', []);

  const [albums, setAlbums] = useState([]);

  const fetchAlbums = async () => {
    await getAlbumsByIds(collection);
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <main className="collection">
      <h2>Collection page</h2>

      <section>
        {collection.map((collectionItem, i) => {
          return <h5 key={i}>{collectionItem}</h5>;
        })}
      </section>
    </main>
  );
};

export default Collection;
