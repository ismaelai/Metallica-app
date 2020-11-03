import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../lib/local-storage-hook.js';
import { getTracksByIds } from '../lib/fetch-tracks.js';


const Playlist = () => {
  const [playlist, setPlaylist] = useLocalStorage('userCollection', []);
  const [favorites, setFavorites] = useState([]);

  const fetchTracks = async () => {
    const tracksData = await getTracksByIds(playlist);
    setPlaylist(tracksData);
    console.log({ tracksData });
  };

  useEffect(() => {
    fetchTracks();
  }, []);


  return (
    <main className="playlist">
      <h2>Playlist page</h2>

      <section>
        {favorites.map((track) => {
          return (
            <article key={track._id}>
              <h3>{track.title}</h3>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Playlist;
