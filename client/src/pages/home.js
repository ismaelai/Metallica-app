import React, { useEffect, useState } from 'react';
import AlbumContainer from '../components/albumContainer.js';
import { getAllAlbums } from '../lib/fetch-albums.js';

const Home = () => {
  const [albums, setAlbums] = useState([]);

  const fetchAllAlbums = async () => {
    const albumsData = await getAllAlbums();
    setAlbums(albumsData);
  };

  useEffect(() => {
    fetchAllAlbums();
  }, []);

  return (
    <>
      <main className="container-home">
        <div className="left">
          <h4>CHOOSE ALBUMS TO START YOUR FAVOURITE COLLECTION:</h4>
        </div>
        <div className="wrapper-album">
          <AlbumContainer albums={albums} />
        </div>
        <div className="right">
          <h4>GO TO COLLECTION</h4>
          <a href="/collection" className="go">
            &gt;
          </a>
        </div>
      </main>
    </>
  );
};
<<<<<<< HEAD
export default Home;

=======
export default Home;
>>>>>>> 100ccc70eff5788f4045d062e416af38849e4f0b
