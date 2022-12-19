const movies = [
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg',
    id: 76600,
    title: 'Avatar: The Way of Water',
    original_title: 'Avatar: The Way of Water',
    overview:
      'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
    poster_path:
      'https://image.tmdb.org/t/p/w500/94xxm5701CzOdJdUEdIuwqZaowx.jpg',
    genre_ids: [878, 28, 12],
    release_date: '2022-12-14',
    vote_average: 8.296,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/9Md4CqzUGDtK5oEkRRvozLkGc9d.jpg',
    id: 674324,
    title: 'The Banshees of Inisherin',
    original_title: 'The Banshees of Inisherin',
    overview:
      'Set on a remote island off the west coast of Ireland, THE BANSHEES OF INISHERIN follows lifelong friends Padraic (Colin Farrell) and Colm (Brendan Gleeson), who find themselves at an impasse when Colm unexpectedly puts an end to their friendship. A stunned Padraic, aided by his sister Siobhan (Kerry Condon) and troubled young islander Dominic (Barry Keoghan), endeavours to repair the relationship, refusing to take no for an answer. But Padraic’s repeated efforts only strengthen his former friend’s resolve and when Colm delivers a desperate ultimatum, events swiftly escalate, with shocking consequences.',
    poster_path:
      'https://image.tmdb.org/t/p/w500/6tgmoZtdRWerdmK1KPcdf87uZyE.jpg',
    genre_ids: [18, 35],
    release_date: '2022-10-21',
    vote_average: 8.019,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/6RCf9jzKxyjblYV4CseayK6bcJo.jpg',
    id: 804095,
    title: 'The Fabelmans',
    original_title: 'The Fabelmans',
    overview:
      'Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.',
    poster_path:
      'https://image.tmdb.org/t/p/w500/d2IywyOPS78vEnJvwVqkVRTiNC1.jpg',
    genre_ids: [18],
    release_date: '2022-11-11',
    vote_average: 7.872,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/e782pDRAlu4BG0ahd777n8zfPzZ.jpg',
    id: 555604,
    title: "Guillermo del Toro's Pinocchio",
    original_title: "Guillermo del Toro's Pinocchio",
    overview:
      "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
    poster_path:
      'https://image.tmdb.org/t/p/w500/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg',
    genre_ids: [16, 14, 18],
    release_date: '2022-11-09',
    vote_average: 8.569,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/atmII0hn3iQe3IWMBmIb3cc8EJZ.jpg',
    id: 791177,
    title: 'Bones and All',
    original_title: 'Bones and All',
    overview:
      'Abandoned by her father, a young woman embarks on a thousand-mile odyssey through the backroads of America where she meets a disenfranchised drifter. But despite their best efforts, all roads lead back to their terrifying pasts and to a final stand that will determine whether their love can survive their otherness.',
    poster_path:
      'https://image.tmdb.org/t/p/w500/svY6EZ1OKjtehC3eyxNTG4Jrxgj.jpg',
    genre_ids: [10749, 18, 27],
    release_date: '2022-11-18',
    vote_average: 7.463,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/ypFD4TJ3nLJesou76V59CnweaT0.jpg',
    id: 715931,
    title: 'Emancipation',
    original_title: 'Emancipation',
    overview:
      'Inspired by the gripping true story of a man who would do anything for his family—and for freedom. When Peter, an enslaved man, risks his life to escape and return to his family, he embarks on a perilous journey of love and endurance.',
    poster_path:
      'https://image.tmdb.org/t/p/w500/s9sUK1vAaOcxJfKzNTszrNkPhkH.jpg',
    genre_ids: [36, 18, 9648, 53, 28],
    release_date: '2022-12-02',
    vote_average: 8.187,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/a0Li3GNoXKM5eNGxbzqGDT20dkh.jpg',
    id: 1053110,
    title: 'I Believe in Santa',
    original_title: 'I Believe in Santa',
    overview:
      "Lisa thinks she's finally met the man of her dreams until she finds out he still believes in Santa Claus.",
    poster_path:
      'https://image.tmdb.org/t/p/w500/tcHe72gXZD0gyfWiHZrGEFfuULE.jpg',
    genre_ids: [10749, 35],
    release_date: '2022-12-14',
    vote_average: 6.3,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/xFPoCs4MM6UsysZyJ9eiwU9YnGS.jpg',
    id: 676547,
    title: 'Prey for the Devil',
    original_title: 'Prey for the Devil',
    overview:
      'In response to a global rise in demonic possessions, the Catholic Church reopens exorcism schools to train priests in the Rite of Exorcism. On this spiritual battlefield, an unlikely warrior rises: a young nun, Sister Ann. Thrust onto the spiritual frontline with fellow student Father Dante, Sister Ann finds herself in a battle for the soul of a young girl and soon realizes the Devil has her right where he wants her.',
    poster_path:
      'https://image.tmdb.org/t/p/w500/w3s6XEDNVGq5LUlghqs6VlvsvL6.jpg',
    genre_ids: [27, 53],
    release_date: '2022-10-23',
    vote_average: 6,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/Yc9q6QuWrMp9nuDm5R8ExNqbEq.jpg',
    id: 19995,
    title: 'Avatar',
    original_title: 'Avatar',
    overview:
      'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
    poster_path:
      'https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
    genre_ids: [28, 12, 14, 878],
    release_date: '2009-12-15',
    vote_average: 7.537,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/6rax7iv5yQtldc3ApEvrheJf8uw.jpg',
    id: 751741,
    title: 'Night at the Museum: Kahmunrah Rises Again',
    original_title: 'Night at the Museum: Kahmunrah Rises Again',
    overview:
      "Nick Daley is following in his father's footsteps as night watchman at the American Museum of Natural History, so he knows what happens when the sun goes down. But when the maniacal ruler Kahmunrah escapes, it is up to Nick to save the museum once and for all.",
    poster_path:
      'https://image.tmdb.org/t/p/w500/zo5iCQFZRgpLldUnOHcCHT943Sq.jpg',
    genre_ids: [16, 35, 10751, 14],
    release_date: '2022-12-09',
    vote_average: 7,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
    id: 436270,
    title: 'Black Adam',
    original_title: 'Black Adam',
    overview:
      'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
    poster_path:
      'https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
    genre_ids: [28, 14, 878],
    release_date: '2022-10-19',
    vote_average: 7.311,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/c5iPQhmZaq8eC8duhPTN373duEr.jpg',
    id: 890980,
    title: "God's Crooked Lines",
    original_title: 'Los renglones torcidos de Dios',
    overview:
      'Alice Gould, a private investigator, pretends to be mentally ill in order to enter a psychiatric hospital and gather evidence for the case she is working on: the death of a patient in unclear circumstances.',
    poster_path:
      'https://image.tmdb.org/t/p/w500/hB2VqiLDiHAyLdZ1dlXIGqDJy06.jpg',
    genre_ids: [18, 9648, 53],
    release_date: '2022-10-06',
    vote_average: 7.6,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/olPXihyFeeNvnaD6IOBltgIV1FU.jpg',
    id: 882598,
    title: 'Smile',
    original_title: 'Smile',
    overview:
      "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
    poster_path:
      'https://image.tmdb.org/t/p/w500/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg',
    genre_ids: [27, 9648, 53],
    release_date: '2022-09-23',
    vote_average: 6.838,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
    id: 505642,
    title: 'Black Panther: Wakanda Forever',
    original_title: 'Black Panther: Wakanda Forever',
    overview:
      'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
    poster_path:
      'https://image.tmdb.org/t/p/w500/ps2oKfhY6DL3alynlSqY97gHSsg.jpg',
    genre_ids: [28, 12, 878],
    release_date: '2022-11-09',
    vote_average: 7.539,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/evIqJy4BCZi86ry7CSu4gEE9ujb.jpg',
    id: 1026624,
    title: "It's a Wonderful Binge",
    original_title: "It's a Wonderful Binge",
    overview:
      'Like the original film, the sequel is set in a near future where all drinking and drugs are banned except for on one glorious day known as The Binge. This year, that day happens to miraculously land on Christmas.',
    poster_path:
      'https://image.tmdb.org/t/p/w500/hU9ouAPcg2LG7n85WUxjKwPq2y4.jpg',
    genre_ids: [35],
    release_date: '2022-12-09',
    vote_average: 7,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/53BC9F2tpZnsGno2cLhzvGprDYS.jpg',
    id: 736526,
    title: 'Troll',
    original_title: 'Troll',
    overview:
      'Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?',
    poster_path:
      'https://image.tmdb.org/t/p/w500/9z4jRr43JdtU66P0iy8h18OyLql.jpg',
    genre_ids: [14, 28, 12],
    release_date: '2022-12-01',
    vote_average: 6.768,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg',
    id: 361743,
    title: 'Top Gun: Maverick',
    original_title: 'Top Gun: Maverick',
    overview:
      'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.',
    poster_path:
      'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
    genre_ids: [28, 18],
    release_date: '2022-05-24',
    vote_average: 8.346,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/vNuHqmOJRQXY0PBd887DklSDlBP.jpg',
    id: 315162,
    title: 'Puss in Boots: The Last Wish',
    original_title: 'Puss in Boots: The Last Wish',
    overview:
      'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',
    poster_path:
      'https://image.tmdb.org/t/p/w500/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg',
    genre_ids: [16, 12, 35, 10751, 14],
    release_date: '2022-12-07',
    vote_average: 8,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/rfnmMYuZ6EKOBvQLp2wqP21v7sI.jpg',
    id: 774752,
    title: 'The Guardians of the Galaxy Holiday Special',
    original_title: 'The Guardians of the Galaxy Holiday Special',
    overview:
      'On a mission to make Christmas unforgettable for Quill, the Guardians head to Earth in search of the perfect present.',
    poster_path:
      'https://image.tmdb.org/t/p/w500/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg',
    genre_ids: [35, 878, 12],
    release_date: '2022-11-25',
    vote_average: 7.447,
  },
  {
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/vKjOToEeM5HcpczmG79fbUxqzju.jpg',
    id: 934433,
    title: 'Scream VI',
    original_title: 'Scream VI',
    overview:
      'Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter in New York City.',
    poster_path:
      'https://image.tmdb.org/t/p/w500/yAwJA1Y2Kt1XdbX72cL4MKtIDs3.jpg',
    genre_ids: [27, 53, 9648],
    release_date: '2023-03-09',
    vote_average: 6.7,
  },
];
