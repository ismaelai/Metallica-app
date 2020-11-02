import React, { useEffect, useState } from 'react';
import AlbumContainer from '../components/albumContainer.js';
import { getAllAlbums } from '../lib/fetch-albums.js';

const Home = () => {
  const [albums, setAlbums] = useState([]);

  const fetchAllAlbums = async () => {
    const allbumsData = await getAllAlbums();
    setAlbums(allbumsData);
  };

  useEffect(() => {
    fetchAllAlbums();
  }, []);

  return (
    <>
      <main className="container home">
        <div className="left">
          <h4>CHOOSE ALBUMS TO START YOUR FAVOURITE COLLECTION:</h4>
        </div>

        <section>
          <AlbumContainer albums={albums} />
        </section>

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
export default Home;

//modelo de album
/* {
    name: 'Kill`Em All ',
    year: 1983,
    bandMembers: [
      'James Hetfield – Guitar Vocals - Rhythm Guitar',
      'Dave Mustaine - Lead Guitar',
      'Ron McGovney - bass',
      'Lars Ulrich – Drums',
    ],
    

    tracks: [
      {
        title: 'Hit The Lights',
        album: 'Kill`Em All',
        duration: '4:15',
        forma: 'mp3',
        preview: {
          soundCloudPlayer:
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/178713757&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/scottrek-160',
          soundCloudSong: 'https://soundcloud.com/scottrek-160/metallica-hit-the-lights',
        },
      },
      {
        title: 'The Four Horsemen',
        album: 'Kill`Em All',
        duration: '7:12',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/253730050&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/officialmetallica',
          soundCloudSong: 'https://soundcloud.com/officialmetallica/the-four-horsemen-remastered',
        },
      },
      {
        title: 'Motorbreath',
        album: 'Kill`Em All',
        duration: '3:07',
        forma: 'mp3',
        preview: {
          soundCloudPlayer:'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/250726392&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/quinmetalrules',
          soundCloudSong: 'https://soundcloud.com/quinmetalrules/metallica-motorbreath-no-life-til-leather-remastered',
        },
      },
      {
        title: 'Jump In The Fire',
        album: 'Kill`Em All',
        duration: '4:40',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/659247881&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/themr-hers',
          soundCloudSong: 'https://soundcloud.com/themr-hers/jump-in-the-fire-metallica',
        },
      },
      {
        title: 'Pulling Teeth',
        album: 'Kill`Em All',
        duration: '4:14',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/455878374&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/lucas-whitehead-116914716',
          soundCloudSong: 'https://soundcloud.com/lucas-whitehead-116914716/metallica-anesthesia-pulling',
        },
      },
      {
        title: 'Whiplash',
        album: 'Kill`Em All',
        duration: '4:08',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317818254&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/cobes-channel',
          soundCloudSong: 'https://soundcloud.com/cobes-channel/metallica-whiplash-remaster-by-cobe',
        },
      },
      {
        title: 'Planthom Lord',
        album: 'Kill`Em All',
        duration: '5:01',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247435358&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/officialmetallica',
          soundCloudSong: 'https://soundcloud.com/officialmetallica/phantom-lord-live-paris-france-1984',
        },
      },
      {
        title: 'No Remorse',
        album: 'Kill`Em All',
        duration: '6:26',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/66510052&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/ewaters70',
          soundCloudSong: 'https://soundcloud.com/ewaters70/no-remorse',
        },
      },
      {
        title: 'Seek & Destroy',
        album: 'Kill`Em All',
        duration: '6:54',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/89789762&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/metal-head0-1',
          soundCloudSong: 'https://soundcloud.com/metal-head0-1/metallica-seek-and-destroy',
        },
      },
      {
        title: 'Metal Militia',
        album: 'Kill`Em All',
        duration: '5:10',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/117366445&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/guillermo-leon-7',
          soundCloudSong: 'https://soundcloud.com/guillermo-leon-7/metallica-metal-militia',
        },
      }
    ]
  } */
