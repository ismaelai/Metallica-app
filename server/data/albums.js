const albums = [
  {
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
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/250726392&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
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

  },
  {
    name: 'Ride The Lightning ',
    year: 1984,
    bandMembers: [
      'James Hetfield – Guitar Vocals - Rhythm Guitar',
      'Kirk Hammett - lead guitar ',
      'Cliff Burton – bass',
      'Lars Ulrich – Drums',
    ],
    tracks: [
      {
        title: 'Fight Fire With Fire',
        album: 'Ride The Lightning',
        duration: '4:44',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/187293179&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/spyros-christoulakis',
          soundCloudSong: 'https://soundcloud.com/spyros-christoulakis/fight-fire-with-fire-mix-7',
        },
      },
      
      {
        title: 'Ride The Lightning',
        album: 'Ride The Lightning',
        duration: '6:37',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/100284329&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/blooddrop-1',
          soundCloudSong: 'https://soundcloud.com/blooddrop-1/metallica-ride-the-lightning',
        },
      },
      {
        title: 'For Whom The Bell Tolls',
        album: 'Ride The Lightning',
        duration: '5:10',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252817666&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/thebestofhardmetal',
          soundCloudSong: 'https://soundcloud.com/thebestofhardmetal/metallica-for-whom-the-bell-tolls',
        },
      },
      {
        title: 'Fade To Black ',
        album: 'Ride The Lightning',
        duration: '6:57',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/101388968&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/dude10111-1',
          soundCloudSong: 'https://soundcloud.com/dude10111-1/fade-to-black-metallica',
        },
      },
      {
        title: 'Trapped Under Ice',
        album: 'Ride The Lightning',
        duration: '4:04',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/11823705&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/prototypeonline',
          soundCloudSong: 'https://soundcloud.com/prototypeonline/trapped-under-ice-metallica',
        },
      },
      {
        title: 'Escape',
        album: 'Ride The Lightning',
        duration: '4:23',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/145082019&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/marcos-s-4',
          soundCloudSong: 'https://soundcloud.com/marcos-s-4/escape-metallica-all-guitars-cover',
        },
      },
      {
        title: 'Creeping Death',
        album: 'Ride The Lightning',
        duration: '6:35',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/253730765&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/officialmetallica',
          soundCloudSong: 'https://soundcloud.com/officialmetallica/creeping-death-remastered',
        },
      },
      {
        title: 'The Call Of Ktulu',
        album: 'Ride The Lightning',
        duration: '8:53',
        forma: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/86443656&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/rdamaya',
          soundCloudSong: 'https://soundcloud.com/rdamaya/metallica-the-call-of-ktulu',
        },
      },
    
      
    ]

  },
  {
    name: 'Master Of Puppets',
    year: 1986,
    bandMembers: [
      'James Hetfield – Guitar Vocals ',
      'Lars Ulrich – Drums',
    ],
    tracks: [
      {
        title: 'Battery',
        album: 'Master Of Puppets',
        duration: '5:12',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/11732359&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/prototypeonline',
          soundCloudSong: 'https://soundcloud.com/prototypeonline/battery-metallica',
        },
      },
      {
        title: 'Master Of Puppets',
        album: 'Master Of Puppets',
        duration: '8:35',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/11732359&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/prototypeonline',
          soundCloudSong: 'https://soundcloud.com/prototypeonline/battery-metallica',
        },
      },
      {
        title: 'The Thing That Should Not Be',
        album: 'Master Of Puppers',
        duration: '6:36',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206734444&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/officialmetallica',
          soundCloudSong: 'https://soundcloud.com/officialmetallica/the-thing-that-should-not-be',
        },
      },
      {
        title: 'Welcome Home - Sanitarium',
        albun: 'Master Of Puppers',
        duration: '6:27',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/264785583&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/litteregasus67',
          soundCloudSong: 'https://soundcloud.com/litteregasus67/metallica-welcome-home-sanitarium-seattle-89-eb-tuning',
        },
      },
      {
        title: 'Disposable Heroes',
        albun: 'Master Of Puppers',
        duration: '8:16',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/291628662&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/keith-p-12',
          soundCloudSong: 'https://soundcloud.com/keith-p-12/metallica-disposable-heroes-remastered',
        },
      },
      {
        title: 'Leper Messiah',
        albun: 'Master Of Puppers',
        duration: '5:39',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        },
      }, -
      {
        title: 'Orion',
        album: 'Master Of Puppers',
        duration: '8:27',
        format: '',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        },
      },
      {
        title: 'Damage, Inc. ',
        album: 'Master Of Puppers',
        duration: '5:32',
        format: '',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        },
      }
    ]
  },
  {
    name: 'Metallica',
    year: 1991,
    image: "",
    bandMembers: [
      'James Hetfield – Guitar Vocals',
      'Lars Ulrich – Drums',
      'Kirk Hammett – Guitar',
      'Jason Newsted – Bass',
    ],
    tracks: [
      {
        title: 'Enter Sadman',
        album: 'Metallica',
        duration: '5:31',
        format: 'mp3',
        preview: {
          soundCloudPlayer:
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/57344869&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/ollie-ashton-1',
          soundCloudSong: 'https://soundcloud.com/ollie-ashton-1/entersandman',
        },
      },
      {
        title: 'Sad But True',
        album: 'Metallica',
        duration: '5:24',
        format: 'mp3',
        preview: {
          soundCloudPlayer:
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/65493223&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/somethinwild',
          soundCloudSong:
            'https://soundcloud.com/somethinwild/sad-but-true-metallica',
        },
      },
      {
        title: 'Holier Than Thou',
        album: 'Metallica',
        duration: '3:48',
        format: 'mp3',
        preview: {
          soundCloudPlayer:
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/50296085&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/i-bum-metallica',
          soundCloudSong:
            'https://soundcloud.com/i-bum-metallica/holier-than-thou-devildriver',
        },
      },
      {
        title: 'The Unforgiven',
        album: 'Metallica',
        duration: '6:26',
        format: 'mp3',
        preview: {
          soundCloudPlayer:
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/94027414&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/alfredo-guzman-navarro',
          soundCloudSong:
            'https://soundcloud.com/alfredo-guzman-navarro/metallica-the-unforgiven',
        },
      },
      {
        title: 'Wherever I May Roam',
        album: 'Metallica',
        duration: '6:44',
        format: 'mp3',
        preview: {
          soundCloudPlayer:
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/89691524&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/metal-head0-1',
          soundCloudSong:
            'https://soundcloud.com/metal-head0-1/metallica-wherever-i-may-roam',
        },
      },
      {
        title: 'Don`t Tread On Me',
        album: 'Metallica',
        duration: '4:00',
        format: 'mp3',
        preview: {
          soundCloudPlayer:
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132546816&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/beatzbywave',
          soundCloudSong:
            'https://soundcloud.com/beatzbywave/metallica-dont-tread-on-me',
        },
      },
      {
        title: 'Through The Never',
        album: 'Metallica',
        duration: '4:02',
        format: 'mp3',
        preview: {
          soundCloudPlayer:
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/51431023&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/walkingthroughflames',
          soundCloudSong:
            'https://soundcloud.com/walkingthroughflames/07-through-the-never-evile',
        },
      },
      {
        title: 'Nothing Else Matters',
        album: 'Metallica',
        duration: '6:29',
        format: 'mp3',
        preview: {
          soundCloudPlayer:
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/25933618&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/a-jameshetfield',
          soundCloudSong:
            'https://soundcloud.com/a-jameshetfield/metallica-nothing-else-matters',
        },
      },
      {
        title: 'Of Wolf And Man',
        album: 'Metallica',
        duration: '4:17',
        format: 'mp3',
        preview: {
          soundCloudPlayer:
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/111723048&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/olasz-jani',
          soundCloudSong: 'https://soundcloud.com/olasz-jani/of-wolf-and-man',
        },
      },
      {
        title: 'The God That Failed',
        album: 'Metallica',
        duration: '5:08',
        format: 'mp3',
        preview: {
          soundCloudPlayer:
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/171997922&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/alan-k-1',
          soundCloudSong: 'https://soundcloud.com/alan-k-1/the-god-that-failed',
        },
      },
      {
        title: 'My Friend Of Misery',
        album: 'Metallica',
        duration: '6:47',
        format: 'mp3',
        preview: {
          soundCloudPlayer:
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/149535553&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/peterc1024',
          soundCloudSong: 'https://soundcloud.com/peterc1024/untitled',
        },
      },
      {
        title: 'The Struggle Within',
        album: 'Metallica',
        duration: '3:55',
        format: 'mp3',
        preview: {
          soundCloudPlayer:
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/51431028&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/walkingthroughflames',
          soundCloudSong:
            'https://soundcloud.com/walkingthroughflames/12-the-struggle-within-devil',
        },
      },
    ],
  },
  {
    name: 'Load',
    year: 1996,
    bandMembers: [
      'James Hetfield – Guitar Vocals',
      'Lars Ulrich – Drums',
      'Kirk Hammett – Lead and rhythm guitar',
      'Jason Newsted – Bass',
    ],
    tracks: [
      {
        title: 'Áin´t My Bich',
        album: 'Load',
        duration: '5:06',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/464138979&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/michaeljacksonjunior',
          soundCloudSong: 'https://soundcloud.com/michaeljacksonjunior/metallica-aint-my-bitch-live',
        }
      },
      {
        title: '2x4',
        album: 'Load',
        duration: '5:28',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/17767948&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/taylor-ros',
          soundCloudSong: 'https://soundcloud.com/taylor-ross/metallica-2x4',
        }
      },
      {
        title: 'The House Jack Built',
        album: 'Load',
        duration: '6:38',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423181191&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/wartime-novelty',
          soundCloudSong: 'https://soundcloud.com/wartime-novelty/the-house-jack-built-metallica-coverbulldog-beast-pickup',
        }
      },
      {
        title: 'Until It Sleeps',
        album: 'Load',
        duration: '4:24',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/12308153&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/kimguy" title=',
          soundCloudSong: 'https://soundcloud.com/kimguy/until-it-sleeps-metallica',
        }
      },
      {
        title: 'King Nothing',
        album: 'Load',
        duration: '5:29',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/229032523&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/officialmetallica',
          soundCloudSong: 'https://soundcloud.com/officialmetallica/king-nothing-live-september-19-2015-rio-de-janeiro-brazil',
        }
      },
      {
        title: 'Hero Of The Day',
        album: 'Load',
        duration: '4:21',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/180860535&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/firedrake090',
          soundCloudSong: 'https://soundcloud.com/firedrake090/metallica-hero-of-the-day',
        }
      },
      {
        title: 'Bleedng Me',
        album: 'Load',
        duration: '8:17',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132546816&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style=',
          soundCloudUser: 'https://soundcloud.com/beatzbywave',
          soundCloudSong: 'https://soundcloud.com/beatzbywave/metallica-dont-tread-on-me',
        }
      },
      {
        title: 'Cure',
        album: 'Load',
        duration: '4:54',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/861464383&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/morus-alba',
          soundCloudSong: 'https://soundcloud.com/morus-alba/cure-metallica-cover',
        }
      },
      {
        title: 'Poor Twisted Me',
        album: 'Load',
        duration: '4:00',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/429197184&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/laytoofficial',
          soundCloudSong: 'https://soundcloud.com/laytoofficial/little-poor-me-2',
        }
      },
      {
        title: 'Wasting My Hate',
        album: 'Load',
        duration: '3:57',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/617943804&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/kredsk',
          soundCloudSong: 'https://soundcloud.com/kredski/metallica-wasting-my-hate',
        }
      },
      {
        title: 'Mama Said',
        album: 'Load',
        duration: '5:19',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/95078566&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/beto-caprera',
          soundCloudSong: 'https://soundcloud.com/beto-caprera/metallica-mama-said-rain',
        }
      },
      {
        title: 'Thorn Within',
        album: 'Load',
        duration: '5:51',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221879111&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/kaine-ellis',
          soundCloudSong: 'https://soundcloud.com/kaine-ellis/metallica-thorn-within-midi',
        }
      },
      {
        title: 'Ronnie',
        album: 'Load',
        duration: '5:17',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/339282659&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/user-732867926',
          soundCloudSong: 'https://soundcloud.com/user-732867926/sets/metallica',
        }
      },
      {
        title: 'The Outlaw Torn',
        album: 'Load',
        duration: '9:48',
        format: 'mp3',
        preview: {
          soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/30928848&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          soundCloudUser: 'https://soundcloud.com/antoniovilhena',
          soundCloudSong: 'https://soundcloud.com/antoniovilhena/metallica-the-outlaw-torn',
        }
      }
    ]
  },
  {
    name: 'Reload',
    year: 1997,
    bandMembers: [

    ],
    tracks: [
      {
        title: 'Fuel',
        album: 'Reload',
        duration: '4:30',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'The Memory Remains',
        album: 'Reload',
        duration: '439:',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Devil`s Dance',
        album: 'Reload',
        duration: '5:19',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'The Unforgiven II',
        album: 'Reload',
        duration: '6:36',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Better Than You ',
        album: 'Reload',
        duration: '5:22',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Slither',
        album: 'Reload',
        duration: '5:13',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Carpe Diem Baby ',
        album: 'Reload',
        duration: '6:12',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Bad Seed',
        album: 'Reload',
        duration: '4:05',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Where The Wild Things Are',
        album: 'Reload',
        duration: '6:53',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Prince Charming',
        album: 'Reload',
        duration: '6:05',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Low Man`s Lyric',
        album: 'Reload',
        duration: '7:36',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Attitude',
        album: 'Reload',
        duration: '5:17',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Fixxxer',
        album: 'Reload',
        duration: '8:15',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      }
      
    ]
  },
  {
    name: 'Garage Inc',
    year: 1998,
    bandMembers: [

    ],
    tracks: [
      {
        title: 'Free Speech For The Dumb',
        album: 'Garage Inc',
        duration: ':',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'It`s Electric',
        album: 'Garage Inc',
        duration: ':',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Sabbra Cadabra',
        album: 'Garage Inc',
        duration: ':',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Turn The Page',
        album: 'Garage Inc',
        duration: ':',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Die Die My Darling',
        album: 'Garage Inc',
        duration: ':',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Loverman',
        album: 'Garage Inc',
        duration: ':',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Mercyful Fate',
        album: 'Garage Inc',
        duration: ':',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Tuesday`s Gone',
        album: 'Garage Inc',
        duration: ':',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Astronomy ',
        album: 'Garage Inc',
        duration: ':',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Whiskey In The Jar',
        album: 'Garage Inc',
        duration: ':',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'The More I See',
        album: 'Garage Inc',
        duration: ':',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      }
    ]
  },
  {
    name: 'S&M',
    year: 1999,
    bandMembers: [

    ],
    tracks: [
      {
        title: 'The Ecstasy of Gold',
        album: 'S&M',
        duration: '2:31',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'The Call of Ktulu',
        album: 'S&M',
        duration: '9:34',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Master of Puppets',
        album: 'S&M',
        duration: '8:55',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Of Wolf and Man',
        album: 'S&M',
        duration: '4:19',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'The Thing That Should Not Be',
        album: 'S&M',
        duration: '7:27',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Fuel',
        album: 'S&M',
        duration: '4:36',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'The Memory Remains',
        album: 'S&M',
        duration: '4:42',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'No Leaf Clover',
        album: 'S&M',
        duration: '5:43',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Hero of the Day ',
        album: 'S&M',
        duration: '4:45',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Devil´s Dance',
        album: 'S&M',
        duration: '5:26',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Bleeding Me',
        album: 'S&M',
        duration: '9:02',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Nothing Else Matters',
        album: 'S&M',
        duration: '6:48',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Until It Sleeps',
        album: 'S&M',
        duration: '4:30',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'For Whom the Bell Tolls',
        album: 'S&M',
        duration: '4:52',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Human',
        album: 'S&M',
        duration: '4:20',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Wherever I May Roam',
        album: 'S&M',
        duration: '7:01',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Outlaw Torn',
        album: 'S&M',
        duration: '9:59',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Sad But True ',
        album: 'S&M',
        duration: '5:46',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'One ',
        album: 'S&M',
        duration: '7:53',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Enter Sandman',
        album: 'S&M',
        duration: '7:39',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Battery',
        album: 'S&M',
        duration: '7:25',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
     
    ]
  },
  {
    name: 'St. Anger',
    year: 2003,
    bandMembers: [

    ],
    tracks: [
      {
        title: 'Frantic',
        album: 'St. Anger',
        duration: '5:50',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'St. Anger ',
        album: 'St. Anger',
        duration: '7:21',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Some Kind of Monster',
        album: 'St. Anger',
        duration: '8:26',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Dirty Window',
        album: 'St. Anger',
        duration: '5:25',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Invisible Kid',
        album: 'St. Anger',
        duration: '8:30',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'My World',
        album: 'St. Anger',
        duration: '5:46',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Shoot Me Again',
        album: 'St. Anger',
        duration: '7:10',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Sweet Amber',
        album: 'St. Anger',
        duration: '5:27',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'The Unnamed Feeling',
        album: 'St. Anger',
        duration: '7:08',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Purify',
        album: 'St. Anger',
        duration: '5:14',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'All Within My Hands',
        album: 'St. Anger',
        duration: '8:48',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      }

    ]
  },
  {
    name: 'Death Magnetic',
    year: 2008,
    bandMembers: [

    ],
    tracks: [
      {
        title: 'That Was Just Your Life',
        album: 'Death Magnetic',
        duration: '7:08',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'End Of The Line',
        album: 'Death Magnetic',
        duration: '7:52',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Broken Beat And Scarred',
        album: 'Death Magnetic',
        duration: '6:25',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Day That Never Comes',
        album: 'Death Magnetic',
        duration: '7:56',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'All Nightmare Long',
        album: 'Death Magnetic',
        duration: '7:57',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Cyanide',
        album: 'Death Magnetic',
        duration: '6:40',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'The Unforgiven III',
        album: 'Death Magnetic',
        duration: '7:47',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Judas Kiss',
        album: 'Death Magnetic',
        duration: '8:01',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'Suicide And Redemption',
        album: 'Death Magnetic',
        duration: '9:58',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        title: 'My Apocalypse',
        album: 'Death Magnetic',
        duration: '5:01',
        format: 'mp3',
        preview: {
          soundCloudPlayer: '',
          soundCloudUser: '',
          soundCloudSong: '',
        }
      },
      {
        name: '..And Justice For All ',
        year: 1988,
        bandMembers: [

        ],
        tracks: [
          {
            title: 'Blackened',
            album: '..And Justice For All ',
            duration: '6:41',
            format: 'mp3',
            preview: {
              soundCloudPlayer: '',
              soundCloudUser: '',
              soundCloudSong: '',
            }
          },
          {
            title: '..And Justice for All',
            album: '..And Justice For All ',
            duration: '9:47',
            format: 'mp3',
            preview: {
              soundCloudPlayer: '',
              soundCloudUser: '',
              soundCloudSong: '',
            }
          },
          {
            title: 'Eye of the Beholder',
            album: '..And Justice For All ',
            duration: '6:30',
            format: 'mp3',
            preview: {
              soundCloudPlayer: '',
              soundCloudUser: '',
              soundCloudSong: '',
            }
          },
          {
            title: 'One',
            album: '..And Justice For All ',
            duration: '7:27',
            format: 'mp3',
            preview: {
              soundCloudPlayer: '',
              soundCloudUser: '',
              soundCloudSong: '',
            }
          },
          {
            title: 'The Shortest Straw',
            album: '..And Justice For All ',
            duration: '6:36',
            format: 'mp3',
            preview: {
              soundCloudPlayer: '',
              soundCloudUser: '',
              soundCloudSong: '',
            }
          },
          {
            title: 'Harvester of Sorrow',
            album: '..And Justice For All ',
            duration: '5:46',
            format: 'mp3',
            preview: {
              soundCloudPlayer: '',
              soundCloudUser: '',
              soundCloudSong: '',
            }
          },
          {
            title: 'The Frayed Ends of Sanity',
            album: '..And Justice For All ',
            duration: '7:44',
            format: 'mp3',
            preview: {
              soundCloudPlayer: '',
              soundCloudUser: '',
              soundCloudSong: '',
            }
          },
          {
            title: 'To Live Is to Die',
            album: '..And Justice For All ',
            duration: '9:49',
            format: 'mp3',
            preview: {
              soundCloudPlayer: '',
              soundCloudUser: '',
              soundCloudSong: '',
            }
          },
          {
            title: 'Dyers Eve',
            album: '..And Justice For All ',
            duration: '5:13',
            format: 'mp3',
            preview: {
              soundCloudPlayer: '',
              soundCloudUser: '',
              soundCloudSong: '',
            }
          },
    
      },
      {
        name: 'Hardwired... to Self-Destruct',
        year: 2016,
        bandMembers: [
          'James Hetfield – Guitar Vocals - Rhythm Guitar',
          'Kirk Hammett - lead guitar ',
          'Cliff Burton – bass',
          'Lars Ulrich – Drums',
        ],
        tracks: [
          {
            title: 'Hardwired',
            album: 'Hardwired... to Self-Destruct',
            duration: '3:18',
            format: 'mp3',
            preview: {
              soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/63233243&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
              soundCloudUser: 'https://soundcloud.com/jluciano85',
              soundCloudSong: 'https://soundcloud.com/jluciano85/metallica-that-was-just-your',
            }
          },
          {
            title: 'Atlas, Rise!',
            album: 'Hardwired... to Self-Destruct',
            duration: '6:31',
            format: 'mp3',
            preview: {
              soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/130779028&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
              soundCloudUser: 'https://soundcloud.com/allelas',
              soundCloudSong: 'https://soundcloud.com/allelas/metallica-the-end-of-the-line',
            }
          },
          {
            title: 'Now That We`re Dead',
            album: 'Hardwired... to Self-Destruct',
            duration: '7:02',
            format: 'mp3',
            preview: {
              soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206734705&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
              soundCloudUser: 'https://soundcloud.com/officialmetallica',
              soundCloudSong: 'https://soundcloud.com/officialmetallica/broken-beat-and-scarred-live',
            }
          },
          {
            title: 'Moth into Flame ',
            album: 'Hardwired... to Self-Destruct',
            duration: '6:08',
            format: 'mp3',
            preview: {
              soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/122240498&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
              soundCloudUser: 'https://soundcloud.com/athomuss',
              soundCloudSong: 'https://soundcloud.com/athomuss/the-day-that-never-comes',
            }
          },
          {
            title: 'Am I Savage?',
            album: 'Hardwired... to Self-Destruct',
            duration: '7:57',
            format: 'mp3',
            preview: {
              soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/99015682&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
              soundCloudUser: 'https://soundcloud.com/kuba-kowal',
              soundCloudSong: 'https://soundcloud.com/kuba-kowal/all-nightmare-long-metallica',
            }
          },
          {
            title: 'Halo on Fire',
            album: 'Hardwired... to Self-Destruct',
            duration: '8:28',
            format: 'mp3',
            preview: {
              soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/165275715&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
              soundCloudUser: 'https://soundcloud.com/alexandre-marques-33',
              soundCloudSong: 'https://soundcloud.com/alexandre-marques-33/cyanide-metallica',
            }
          },
          {
            title: 'Confusion',
            album: 'Hardwired... to Self-Destruct',
            duration: '7:47',
            format: 'mp3',
            preview: {
              soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/94027414&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
              soundCloudUser: 'https://soundcloud.com/alfredo-guzman-navarro',
              soundCloudSong: 'https://soundcloud.com/alfredo-guzman-navarro/metallica-the-unforgiven',
            }
          },
          {
            title: 'Dream No More',
            album: 'Hardwired... to Self-Destruct',
            duration: '8:01',
            format: 'mp3',
            preview: {
              soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247270886&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
              soundCloudUser: 'https://soundcloud.com/metal_riffs',
              soundCloudSong: 'https://soundcloud.com/metal_riffs/the-judas-kiss-metallica-quebec-magnetic-hd',
            }
          },
          {
            title: 'ManUNkind',
            album: 'Hardwired... to Self-Destruct',
            duration: '9:58',
            format: 'mp3',
            preview: {
              soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/78837660&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
              soundCloudUser: 'https://soundcloud.com/robert-scott-30',
              soundCloudSong: 'https://soundcloud.com/robert-scott-30/suicide-and-redemption',
            }
          },
          {
            title: 'Here Comes Revenge ',
            album: 'Hardwired... to Self-Destruct',
            duration: '5:01',
            format: 'mp3',
            preview: {
              soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247270993&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
              soundCloudUser: 'https://soundcloud.com/metal_riffs',
              soundCloudSong: 'https://soundcloud.com/metal_riffs/my-apocalypse-metallica-live-quebec-magnetic',
            }
          },
          {
            title: 'Murder One',
            album: 'Hardwired... to Self-Destruct',
            duration: '5:52',
            format: 'mp3',
            preview: {
              soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247270993&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
              soundCloudUser: 'https://soundcloud.com/metal_riffs',
              soundCloudSong: 'https://soundcloud.com/metal_riffs/my-apocalypse-metallica-live-quebec-magnetic',
            }
          },
          {
            title: 'Spit Out the Bone',
            album: 'Hardwired... to Self-Destruct',
            duration: '7:10',
            format: 'mp3',
            preview: {
              soundCloudPlayer: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247270993&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
              soundCloudUser: 'https://soundcloud.com/metal_riffs',
              soundCloudSong: 'https://soundcloud.com/metal_riffs/my-apocalypse-metallica-live-quebec-magnetic',
            }
          }
        ]
      }
    ];
export default albums;
