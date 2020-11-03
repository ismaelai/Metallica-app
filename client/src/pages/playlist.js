<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import { getAlbumsByIds } from '../lib/fetch-albums.js';
import { useLocalStorage } from '../lib/local-storage-hook.js';

  const Playlist = () => {
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
     setAlbumToRender(index);
     setisClicked(true);
   };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <main className="container-playlist">
      <div className="left">
        <h3>USER:</h3>
        <h4>Username</h4>
      </div>
      <section className="wrapper-collection">
        <div className="title">
          <h3>ALBUM</h3>
          <h3>YEAR</h3>
          <h3>DURATION</h3>
          <h3>PREVIEW</h3>
        </div>
        {albums.map((album) => {
          return (
            <article
              key={album._id}
              onClick={handleClick}
              className="album-row"
            >
              <h3>{album.name}</h3>
              <h3>{album.year}</h3>
              <h3>{album.className}</h3>
              <button type="submit" className="favorite">
                EDIT
              </button>
              <button type="submit" className="favorite">
                DELETE
              </button>
>>>>>>> 100ccc70eff5788f4045d062e416af38849e4f0b
            </article>
          );
        })}
      </section>
<<<<<<< HEAD
=======
      <div className="right"></div>
>>>>>>> 100ccc70eff5788f4045d062e416af38849e4f0b
    </main>
  );
};

export default Playlist;
