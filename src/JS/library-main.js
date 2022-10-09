// // to delete once local storage is working
// const galleryItems = [
//   {
//     adult: false,
//     backdrop_path: '/pfAZP7JvTTxqgq7n6A1OYgkAdEW.jpg',
//     id: 894205,
//     title: 'Werewolf by Night',
//     original_language: 'en',
//     original_title: 'Werewolf by Night',
//     overview:
//       'On a dark and somber night, a secret cabal of monster hunters emerge from the shadows and gather at the foreboding Bloodstone Temple following the death of their leader. In a strange and macabre memorial to the leader’s life, the attendees are thrust into a mysterious and deadly competition for a powerful relic—a hunt that will ultimately bring them face to face with a dangerous monster.',
//     poster_path: '/mvIvNKRIJPPS7WSFarFhOAGIVnU.jpg',
//     media_type: 'movie',
//     genre_ids: [28, 14, 27, 9648, 10770],
//     popularity: 132.943,
//     release_date: '2022-09-25',
//     video: false,
//     vote_average: 7.5,
//     vote_count: 165,
//   },
//   {
//     adult: false,
//     backdrop_path: '/iHc14vucwUMl6WuvQa4iPfoEdy9.jpg',
//     id: 799546,
//     title: 'Luckiest Girl Alive',
//     original_language: 'en',
//     original_title: 'Luckiest Girl Alive',
//     overview:
//       'A successful woman in New York City finds her life upended when she is forced to confront a dark truth that threatens to unravel her meticulously crafted life.',
//     poster_path: '/e0vrbTmTf2ZcW5CIS9qJ8FDbsU9.jpg',
//     media_type: 'movie',
//     genre_ids: [80, 18],
//     popularity: 43.798,
//     release_date: '2022-09-30',
//     video: false,
//     vote_average: 6.135,
//     vote_count: 37,
//   },
//   {
//     adult: false,
//     backdrop_path: '/3r3tZgKTw1554hcFoUfydLHE38w.jpg',
//     id: 338947,
//     title: 'Hellraiser',
//     original_language: 'en',
//     original_title: 'Hellraiser',
//     overview:
//       'A young woman struggling with addiction comes into possession of an ancient puzzle box, unaware that its purpose is to summon the Cenobites, a group of sadistic supernatural beings from another dimension.',
//     poster_path: '/u4ikorO4E3PouLRRwGaRuhFvsl3.jpg',
//     media_type: 'movie',
//     genre_ids: [27, 9648],
//     popularity: 124.915,
//     release_date: '2022-09-28',
//     video: false,
//     vote_average: 6.7,
//     vote_count: 71,
//   },
//   {
//     adult: false,
//     backdrop_path: '/jGcACEQ684x0C6jRlBrkEJyVm9m.jpg',
//     id: 126254,
//     name: 'The Midnight Club',
//     original_language: 'en',
//     original_name: 'The Midnight Club',
//     overview:
//       'At a manor with a mysterious history, the 8 members of the Midnight Club meet each night at midnight to tell sinister stories – and to look for signs of the supernatural from the beyond.',
//     poster_path: '/f49Ochq1QwEXBGrBvonlJCDTjTH.jpg',
//     media_type: 'tv',
//     genre_ids: [18, 9648],
//     popularity: 87.417,
//     first_air_date: '2022-10-07',
//     vote_average: 8.1,
//     vote_count: 11,
//     origin_country: ['US'],
//   },
//   {
//     adult: false,
//     backdrop_path: '/iiaU8m4kUyDnbqtlr2hyiXYUlcH.jpg',
//     id: 723419,
//     title: "Mr. Harrigan's Phone",
//     original_language: 'en',
//     original_title: "Mr. Harrigan's Phone",
//     overview:
//       'Craig, a young boy living in a small town befriends an older, reclusive billionaire, Mr. Harrigan. The two form a bond over books and an iPhone, but when the man passes away the boy discovers that not everything dead is gone.',
//     poster_path: '/gPn9e8eP7TeKQU4IeWAMzOajR40.jpg',
//     media_type: 'movie',
//     genre_ids: [53, 18],
//     popularity: 289.138,
//     release_date: '2022-10-05',
//     video: false,
//     vote_average: 6.701,
//     vote_count: 142,
//   },
//   {
//     adult: false,
//     backdrop_path: '/1rO4xoCo4Z5WubK0OwdVll3DPYo.jpg',
//     id: 84773,
//     name: 'The Lord of the Rings: The Rings of Power',
//     original_language: 'en',
//     original_name: 'The Lord of the Rings: The Rings of Power',
//     overview:
//       'Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.',
//     poster_path: '/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg',
//     media_type: 'tv',
//     genre_ids: [10765, 10759, 18],
//     popularity: 5653.246,
//     first_air_date: '2022-09-01',
//     vote_average: 7.669,
//     vote_count: 974,
//     origin_country: ['US'],
//   },
//   {
//     adult: false,
//     backdrop_path: '/7t5ALGBUOHafXpf25sXDLjm0GNt.jpg',
//     id: 795109,
//     title: 'Catherine Called Birdy',
//     original_language: 'en',
//     original_title: 'Catherine Called Birdy',
//     overview:
//       'A teenage girl in Medieval England navigates life and tries to avoid the arranged marriages her father maps out for her.',
//     poster_path: '/a6welBP7DtjHDsr6fwT5IuCS33f.jpg',
//     media_type: 'movie',
//     genre_ids: [12, 35],
//     popularity: 23.363,
//     release_date: '2022-09-23',
//     video: false,
//     vote_average: 5.9,
//     vote_count: 8,
//   },
//   {
//     adult: false,
//     backdrop_path: '/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg',
//     id: 718930,
//     title: 'Bullet Train',
//     original_language: 'en',
//     original_title: 'Bullet Train',
//     overview:
//       "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
//     poster_path: '/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg',
//     media_type: 'movie',
//     genre_ids: [28, 35, 53],
//     popularity: 4647.01,
//     release_date: '2022-07-03',
//     video: false,
//     vote_average: 7.481,
//     vote_count: 1553,
//   },
//   {
//     adult: false,
//     backdrop_path: '/et1rWV1LCt4ViKB9eQWOVvnxJwS.jpg',
//     id: 999722,
//     title: 'Old People',
//     original_language: 'de',
//     original_title: 'Old People',
//     overview:
//       "A woman who's returned home with her two kids to attend her sister's wedding must suddenly defend their lives against older people on a killing spree.",
//     poster_path: '/nSguJmHeYv6cwTljOZduPJDTweS.jpg',
//     media_type: 'movie',
//     genre_ids: [27],
//     popularity: 50.366,
//     release_date: '2022-10-07',
//     video: false,
//     vote_average: 6.1,
//     vote_count: 20,
//   },
//   {
//     adult: false,
//     backdrop_path: '/3O5voBAoeQ9kipZCKmx6uDfiRLc.jpg',
//     id: 136699,
//     name: 'Glitch',
//     original_language: 'ko',
//     original_name: '글리치',
//     overview:
//       'A young woman joins forces with a UFO enthusiast to investigate her boyfriend’s sudden disappearance and stumbles into a wild conspiracy.',
//     poster_path: '/dspwDOosidQT85oPDDHMM9zmaLw.jpg',
//     media_type: 'tv',
//     genre_ids: [18, 35, 9648, 10765],
//     popularity: 83.255,
//     first_air_date: '2022-10-07',
//     vote_average: 7.0,
//     vote_count: 2,
//     origin_country: ['KR'],
//   },
//   {
//     adult: false,
//     backdrop_path: '/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg',
//     id: 642885,
//     title: 'Hocus Pocus 2',
//     original_language: 'en',
//     original_title: 'Hocus Pocus 2',
//     overview:
//       'It’s been 29 years since someone lit the Black Flame Candle and resurrected the 17th-century sisters, and they are looking for revenge. Now it is up to three high-school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow’s Eve.',
//     poster_path: '/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg',
//     media_type: 'movie',
//     genre_ids: [14, 35, 10751],
//     popularity: 5947.971,
//     release_date: '2022-09-27',
//     video: false,
//     vote_average: 7.854,
//     vote_count: 514,
//   },
//   {
//     adult: false,
//     backdrop_path: '/qyc3WpSIOgErAZu0p2UrEho8LtG.jpg',
//     id: 901385,
//     title: 'Significant Other',
//     original_language: 'en',
//     original_title: 'Significant Other',
//     overview:
//       "Ruth and Harry decide to take a romantic backpacking trip through the Pacific Northwest, but amongst the beautiful scenery, Ruth makes an unexpected discovery that sets her off on a strange, frightening new path. The couple aren't alone in the woods, and they might not be the same when they come out...if they come out.",
//     poster_path: '/liGvBdUsyOfiTJjNCD55JJfISzb.jpg',
//     media_type: 'movie',
//     genre_ids: [878, 53, 27, 10749],
//     popularity: 76.719,
//     release_date: '2022-10-06',
//     video: false,
//     vote_average: 7.0,
//     vote_count: 15,
//   },
//   {
//     adult: false,
//     backdrop_path: '/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg',
//     id: 717728,
//     title: 'Jeepers Creepers: Reborn',
//     original_language: 'en',
//     original_title: 'Jeepers Creepers: Reborn',
//     overview:
//       'Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.',
//     poster_path: '/aGBuiirBIQ7o64FmJxO53eYDuro.jpg',
//     media_type: 'movie',
//     genre_ids: [27, 53, 9648],
//     popularity: 869.691,
//     release_date: '2022-09-15',
//     video: false,
//     vote_average: 5.752,
//     vote_count: 157,
//   },
//   {
//     adult: false,
//     backdrop_path: '/eljErfkQUcFUgQkI4I1soZcH8MW.jpg',
//     id: 92783,
//     name: 'She-Hulk: Attorney at Law',
//     original_language: 'en',
//     original_name: 'She-Hulk: Attorney at Law',
//     overview:
//       'Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk.',
//     poster_path: '/3qO7wycn6o0lUJf15dupMFbEBTY.jpg',
//     media_type: 'tv',
//     genre_ids: [35, 10765],
//     popularity: 3661.228,
//     first_air_date: '2022-08-18',
//     vote_average: 7.028,
//     vote_count: 905,
//     origin_country: ['US'],
//   },
//   {
//     adult: false,
//     backdrop_path: '/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg',
//     id: 94997,
//     name: 'House of the Dragon',
//     original_language: 'en',
//     original_name: 'House of the Dragon',
//     overview:
//       'The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.',
//     poster_path: '/z2yahl2uefxDCl0nogcRBstwruJ.jpg',
//     media_type: 'tv',
//     genre_ids: [10765, 18, 10759],
//     popularity: 5631.599,
//     first_air_date: '2022-08-21',
//     vote_average: 8.557,
//     vote_count: 1641,
//     origin_country: ['US'],
//   },
//   {
//     adult: false,
//     backdrop_path: '/sobIeWp1a3saZTBkoRTAf8sfC7J.jpg',
//     id: 335795,
//     title: 'Monster High: The Movie',
//     original_language: 'en',
//     original_title: 'Monster High: The Movie',
//     overview:
//       "Clawdeen Wolf, half human and half werewolf, has recently started attending Monster High, a school for monsters in all forms. After quickly befriending her classmates Frankie Stein and Draculaura, Clawdeen feels like she has finally found a place where she can truly be herself, or so she thinks. Soon, a devious plan to destroy Monster High threatens to reveal her real identity and Clawdeen must learn to embrace her true monster heart before it's too late.",
//     poster_path: '/tn3GWm0Erehkpur8PUuYWxGpul5.jpg',
//     media_type: 'movie',
//     genre_ids: [12, 10751, 10770],
//     popularity: 204.093,
//     release_date: '2022-10-06',
//     video: false,
//     vote_average: 6.235,
//     vote_count: 34,
//   },
//   {
//     adult: false,
//     backdrop_path: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg',
//     id: 616037,
//     title: 'Thor: Love and Thunder',
//     original_language: 'en',
//     original_title: 'Thor: Love and Thunder',
//     overview:
//       'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
//     poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
//     media_type: 'movie',
//     genre_ids: [14, 28, 35],
//     popularity: 1920.283,
//     release_date: '2022-07-06',
//     video: false,
//     vote_average: 6.752,
//     vote_count: 4085,
//   },
//   {
//     adult: false,
//     backdrop_path: '/ajztm40qDPqMONaSJhQ2PaNe2Xd.jpg',
//     id: 83867,
//     name: 'Star Wars: Andor',
//     original_language: 'en',
//     original_name: 'Star Wars: Andor',
//     overview:
//       'The tale of the burgeoning rebellion against the Empire and how people and planets became involved. In an era filled with danger, deception and intrigue, Cassian Andor embarks on the path that is destined to turn him into a rebel hero.',
//     poster_path: '/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg',
//     media_type: 'tv',
//     genre_ids: [10765, 10759, 10768],
//     popularity: 958.367,
//     first_air_date: '2022-09-21',
//     vote_average: 7.887,
//     vote_count: 119,
//     origin_country: ['US'],
//   },
//   {
//     adult: false,
//     backdrop_path: '/42iDbOtqWqPvI3FnP3KafLFrQq.jpg',
//     id: 209167,
//     name: 'Conversations with a Killer: The Jeffrey Dahmer Tapes',
//     original_language: 'en',
//     original_name: 'Conversations with a Killer: The Jeffrey Dahmer Tapes',
//     overview:
//       'Serial killer Jeffrey Dahmer confesses to his gruesome crimes in unguarded interviews, offering an unsettling view into a disturbed mind.',
//     poster_path: '/5BTn4GxWL48BP8OkfiatxZ6qpuE.jpg',
//     media_type: 'tv',
//     genre_ids: [99, 80],
//     popularity: 780.19,
//     first_air_date: '2022-10-07',
//     vote_average: 8.64,
//     vote_count: 25,
//     origin_country: ['US'],
//   },
//   {
//     adult: false,
//     backdrop_path: '/5vUux2vNUTqwCzb7tVcH18XnsF.jpg',
//     id: 113988,
//     name: 'Dahmer – Monster: The Jeffrey Dahmer Story',
//     original_language: 'en',
//     original_name: 'Dahmer – Monster: The Jeffrey Dahmer Story',
//     overview:
//       'Across more than a decade, 17 teen boys and young men were murdered by convicted killer Jeffrey Dahmer. How did he evade arrest for so long?',
//     poster_path: '/f2PVrphK0u81ES256lw3oAZuF3x.jpg',
//     media_type: 'tv',
//     genre_ids: [18, 80],
//     popularity: 9719.599,
//     first_air_date: '2022-09-21',
//     vote_average: 8.37,
//     vote_count: 681,
//     origin_country: ['US'],
//   },
// ];
// const galleryItems2 = [
//   {
//     adult: false,
//     backdrop_path: '/jGcACEQ684x0C6jRlBrkEJyVm9m.jpg',
//     id: 126254,
//     name: 'The Midnight Club',
//     original_language: 'en',
//     original_name: 'The Midnight Club',
//     overview:
//       'At a manor with a mysterious history, the 8 members of the Midnight Club meet each night at midnight to tell sinister stories – and to look for signs of the supernatural from the beyond.',
//     poster_path: '/f49Ochq1QwEXBGrBvonlJCDTjTH.jpg',
//     media_type: 'tv',
//     genre_ids: [18, 9648],
//     popularity: 87.417,
//     first_air_date: '2022-10-07',
//     vote_average: 8.1,
//     vote_count: 11,
//     origin_country: ['US'],
//   },
//   {
//     adult: false,
//     backdrop_path: '/iiaU8m4kUyDnbqtlr2hyiXYUlcH.jpg',
//     id: 723419,
//     title: "Mr. Harrigan's Phone",
//     original_language: 'en',
//     original_title: "Mr. Harrigan's Phone",
//     overview:
//       'Craig, a young boy living in a small town befriends an older, reclusive billionaire, Mr. Harrigan. The two form a bond over books and an iPhone, but when the man passes away the boy discovers that not everything dead is gone.',
//     poster_path: '/gPn9e8eP7TeKQU4IeWAMzOajR40.jpg',
//     media_type: 'movie',
//     genre_ids: [53, 18],
//     popularity: 289.138,
//     release_date: '2022-10-05',
//     video: false,
//     vote_average: 6.701,
//     vote_count: 142,
//   },
//   {
//     adult: false,
//     backdrop_path: '/1rO4xoCo4Z5WubK0OwdVll3DPYo.jpg',
//     id: 84773,
//     name: 'The Lord of the Rings: The Rings of Power',
//     original_language: 'en',
//     original_name: 'The Lord of the Rings: The Rings of Power',
//     overview:
//       'Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.',
//     poster_path: '/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg',
//     media_type: 'tv',
//     genre_ids: [10765, 10759, 18],
//     popularity: 5653.246,
//     first_air_date: '2022-09-01',
//     vote_average: 7.669,
//     vote_count: 974,
//     origin_country: ['US'],
//   },
//   {
//     adult: false,
//     backdrop_path: '/7t5ALGBUOHafXpf25sXDLjm0GNt.jpg',
//     id: 795109,
//     title: 'Catherine Called Birdy',
//     original_language: 'en',
//     original_title: 'Catherine Called Birdy',
//     overview:
//       'A teenage girl in Medieval England navigates life and tries to avoid the arranged marriages her father maps out for her.',
//     poster_path: '/a6welBP7DtjHDsr6fwT5IuCS33f.jpg',
//     media_type: 'movie',
//     genre_ids: [12, 35],
//     popularity: 23.363,
//     release_date: '2022-09-23',
//     video: false,
//     vote_average: 5.9,
//     vote_count: 8,
//   },
//   {
//     adult: false,
//     backdrop_path: '/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg',
//     id: 718930,
//     title: 'Bullet Train',
//     original_language: 'en',
//     original_title: 'Bullet Train',
//     overview:
//       "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
//     poster_path: '/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg',
//     media_type: 'movie',
//     genre_ids: [28, 35, 53],
//     popularity: 4647.01,
//     release_date: '2022-07-03',
//     video: false,
//     vote_average: 7.481,
//     vote_count: 1553,
//   },
//   {
//     adult: false,
//     backdrop_path: '/et1rWV1LCt4ViKB9eQWOVvnxJwS.jpg',
//     id: 999722,
//     title: 'Old People',
//     original_language: 'de',
//     original_title: 'Old People',
//     overview:
//       "A woman who's returned home with her two kids to attend her sister's wedding must suddenly defend their lives against older people on a killing spree.",
//     poster_path: '/nSguJmHeYv6cwTljOZduPJDTweS.jpg',
//     media_type: 'movie',
//     genre_ids: [27],
//     popularity: 50.366,
//     release_date: '2022-10-07',
//     video: false,
//     vote_average: 6.1,
//     vote_count: 20,
//   },
//   {
//     adult: false,
//     backdrop_path: '/3O5voBAoeQ9kipZCKmx6uDfiRLc.jpg',
//     id: 136699,
//     name: 'Glitch',
//     original_language: 'ko',
//     original_name: '글리치',
//     overview:
//       'A young woman joins forces with a UFO enthusiast to investigate her boyfriend’s sudden disappearance and stumbles into a wild conspiracy.',
//     poster_path: '/dspwDOosidQT85oPDDHMM9zmaLw.jpg',
//     media_type: 'tv',
//     genre_ids: [18, 35, 9648, 10765],
//     popularity: 83.255,
//     first_air_date: '2022-10-07',
//     vote_average: 7.0,
//     vote_count: 2,
//     origin_country: ['KR'],
//   },
//   {
//     adult: false,
//     backdrop_path: '/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg',
//     id: 642885,
//     title: 'Hocus Pocus 2',
//     original_language: 'en',
//     original_title: 'Hocus Pocus 2',
//     overview:
//       'It’s been 29 years since someone lit the Black Flame Candle and resurrected the 17th-century sisters, and they are looking for revenge. Now it is up to three high-school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow’s Eve.',
//     poster_path: '/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg',
//     media_type: 'movie',
//     genre_ids: [14, 35, 10751],
//     popularity: 5947.971,
//     release_date: '2022-09-27',
//     video: false,
//     vote_average: 7.854,
//     vote_count: 514,
//   },
//   {
//     adult: false,
//     backdrop_path: '/qyc3WpSIOgErAZu0p2UrEho8LtG.jpg',
//     id: 901385,
//     title: 'Significant Other',
//     original_language: 'en',
//     original_title: 'Significant Other',
//     overview:
//       "Ruth and Harry decide to take a romantic backpacking trip through the Pacific Northwest, but amongst the beautiful scenery, Ruth makes an unexpected discovery that sets her off on a strange, frightening new path. The couple aren't alone in the woods, and they might not be the same when they come out...if they come out.",
//     poster_path: '/liGvBdUsyOfiTJjNCD55JJfISzb.jpg',
//     media_type: 'movie',
//     genre_ids: [878, 53, 27, 10749],
//     popularity: 76.719,
//     release_date: '2022-10-06',
//     video: false,
//     vote_average: 7.0,
//     vote_count: 15,
//   },
//   {
//     adult: false,
//     backdrop_path: '/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg',
//     id: 717728,
//     title: 'Jeepers Creepers: Reborn',
//     original_language: 'en',
//     original_title: 'Jeepers Creepers: Reborn',
//     overview:
//       'Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.',
//     poster_path: '/aGBuiirBIQ7o64FmJxO53eYDuro.jpg',
//     media_type: 'movie',
//     genre_ids: [27, 53, 9648],
//     popularity: 869.691,
//     release_date: '2022-09-15',
//     video: false,
//     vote_average: 5.752,
//     vote_count: 157,
//   },
//   {
//     adult: false,
//     backdrop_path: '/eljErfkQUcFUgQkI4I1soZcH8MW.jpg',
//     id: 92783,
//     name: 'She-Hulk: Attorney at Law',
//     original_language: 'en',
//     original_name: 'She-Hulk: Attorney at Law',
//     overview:
//       'Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk.',
//     poster_path: '/3qO7wycn6o0lUJf15dupMFbEBTY.jpg',
//     media_type: 'tv',
//     genre_ids: [35, 10765],
//     popularity: 3661.228,
//     first_air_date: '2022-08-18',
//     vote_average: 7.028,
//     vote_count: 905,
//     origin_country: ['US'],
//   },
//   {
//     adult: false,
//     backdrop_path: '/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg',
//     id: 94997,
//     name: 'House of the Dragon',
//     original_language: 'en',
//     original_name: 'House of the Dragon',
//     overview:
//       'The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.',
//     poster_path: '/z2yahl2uefxDCl0nogcRBstwruJ.jpg',
//     media_type: 'tv',
//     genre_ids: [10765, 18, 10759],
//     popularity: 5631.599,
//     first_air_date: '2022-08-21',
//     vote_average: 8.557,
//     vote_count: 1641,
//     origin_country: ['US'],
//   },
//   {
//     adult: false,
//     backdrop_path: '/sobIeWp1a3saZTBkoRTAf8sfC7J.jpg',
//     id: 335795,
//     title: 'Monster High: The Movie',
//     original_language: 'en',
//     original_title: 'Monster High: The Movie',
//     overview:
//       "Clawdeen Wolf, half human and half werewolf, has recently started attending Monster High, a school for monsters in all forms. After quickly befriending her classmates Frankie Stein and Draculaura, Clawdeen feels like she has finally found a place where she can truly be herself, or so she thinks. Soon, a devious plan to destroy Monster High threatens to reveal her real identity and Clawdeen must learn to embrace her true monster heart before it's too late.",
//     poster_path: '/tn3GWm0Erehkpur8PUuYWxGpul5.jpg',
//     media_type: 'movie',
//     genre_ids: [12, 10751, 10770],
//     popularity: 204.093,
//     release_date: '2022-10-06',
//     video: false,
//     vote_average: 6.235,
//     vote_count: 34,
//   },
//   {
//     adult: false,
//     backdrop_path: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg',
//     id: 616037,
//     title: 'Thor: Love and Thunder',
//     original_language: 'en',
//     original_title: 'Thor: Love and Thunder',
//     overview:
//       'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
//     poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
//     media_type: 'movie',
//     genre_ids: [14, 28, 35],
//     popularity: 1920.283,
//     release_date: '2022-07-06',
//     video: false,
//     vote_average: 6.752,
//     vote_count: 4085,
//   },
//   {
//     adult: false,
//     backdrop_path: '/ajztm40qDPqMONaSJhQ2PaNe2Xd.jpg',
//     id: 83867,
//     name: 'Star Wars: Andor',
//     original_language: 'en',
//     original_name: 'Star Wars: Andor',
//     overview:
//       'The tale of the burgeoning rebellion against the Empire and how people and planets became involved. In an era filled with danger, deception and intrigue, Cassian Andor embarks on the path that is destined to turn him into a rebel hero.',
//     poster_path: '/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg',
//     media_type: 'tv',
//     genre_ids: [10765, 10759, 10768],
//     popularity: 958.367,
//     first_air_date: '2022-09-21',
//     vote_average: 7.887,
//     vote_count: 119,
//     origin_country: ['US'],
//   },
//   {
//     adult: false,
//     backdrop_path: '/42iDbOtqWqPvI3FnP3KafLFrQq.jpg',
//     id: 209167,
//     name: 'Conversations with a Killer: The Jeffrey Dahmer Tapes',
//     original_language: 'en',
//     original_name: 'Conversations with a Killer: The Jeffrey Dahmer Tapes',
//     overview:
//       'Serial killer Jeffrey Dahmer confesses to his gruesome crimes in unguarded interviews, offering an unsettling view into a disturbed mind.',
//     poster_path: '/5BTn4GxWL48BP8OkfiatxZ6qpuE.jpg',
//     media_type: 'tv',
//     genre_ids: [99, 80],
//     popularity: 780.19,
//     first_air_date: '2022-10-07',
//     vote_average: 8.64,
//     vote_count: 25,
//     origin_country: ['US'],
//   },
//   {
//     adult: false,
//     backdrop_path: '/5vUux2vNUTqwCzb7tVcH18XnsF.jpg',
//     id: 113988,
//     name: 'Dahmer – Monster: The Jeffrey Dahmer Story',
//     original_language: 'en',
//     original_name: 'Dahmer – Monster: The Jeffrey Dahmer Story',
//     overview:
//       'Across more than a decade, 17 teen boys and young men were murdered by convicted killer Jeffrey Dahmer. How did he evade arrest for so long?',
//     poster_path: '/f2PVrphK0u81ES256lw3oAZuF3x.jpg',
//     media_type: 'tv',
//     genre_ids: [18, 80],
//     popularity: 9719.599,
//     first_air_date: '2022-09-21',
//     vote_average: 8.37,
//     vote_count: 681,
//     origin_country: ['US'],
//   },
// ];

// const saveToLocalStorage = function (key, data) {
//   localStorage.setItem(key, JSON.stringify(data));
// };

// saveToLocalStorage('WATCHED', galleryItems);
// saveToLocalStorage('QUEUE', galleryItems2);
// //////////////////////////////////////////////
const moviesList = document.querySelector('.gallery');
const paginationNav = document.querySelector('.pagination__wrapper');
const paginationWrapper = document.querySelector('.pagination__pages');
const nextButton = document.querySelector('#next-button');
const prevButton = document.querySelector('#prev-button');
const watchedButton = document.querySelector('.button_watched');
const queueButton = document.querySelector('.button_queue');

let currentPage;
let pageCount;
const paginationLimit = 20;
let movies = [];

window.addEventListener('load', pagination('QUEUE'));

watchedButton.addEventListener('click', e => {
  pagination(e.target.textContent);
  queueButton.classList.remove("button_queue");
  watchedButton.classList.add("button_queue");
  watchedButton.classList.remove("button_watched");
  queueButton.classList.add("button_watched");
});

queueButton.addEventListener('click', e => {
  pagination(e.target.textContent);
  watchedButton.classList.remove("button_queue");
  queueButton.classList.add("button_queue");
  queueButton.classList.remove("button_watched");
  watchedButton.classList.add("button_watched");
});

//Markups
function paginationMarkup(currentPage, pageCount) {
  if (pageCount <= 1) return [1];
  const center = [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ],
    filteredCenter = center.filter(p => p > 1 && p < pageCount),
    includeThreeLeft = currentPage === 5,
    includeThreeRight = currentPage === pageCount - 4,
    includeLeftDots = currentPage > 5,
    includeRightDots = currentPage < pageCount - 4;

  if (includeThreeLeft) filteredCenter.unshift(2);
  if (includeThreeRight) filteredCenter.push(pageCount - 1);

  if (includeLeftDots) filteredCenter.unshift('...');
  if (includeRightDots) filteredCenter.push('...');

  return [1, ...filteredCenter, pageCount];
}

function paginationMarkupMobile(currentPage, pageCount) {
  if (pageCount <= 1) return [1];
  const center = [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ];
  filteredCenter = center.filter(p => p >= 1 && p <= pageCount);
  includeTwoRight = currentPage === 1;
  includeOneRight = currentPage === 2;

  if (includeTwoRight) filteredCenter.push(currentPage + 3, currentPage + 4);
  if (includeOneRight) filteredCenter.push(currentPage + 3);

  return [...filteredCenter];
}

function markupMovies(films) {
  return films
    .map(
      ({
        title,
        poster_path,
        genre_ids,
        release_date,
        first_air_date,
        year = release_date || first_air_date || ' - ',
      }) => {
        return `<li class="gallery__item">
              <a class="gallery__link" href="">
                  <img class="gallery__image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" loading="lazy">
              </a>
              <div class="gallery__info">
                  <p class="gallery__title">${title}</p>
                  <p class="gallery__genre">${genre_ids}</p>
                  <p class="gallery__year">${year.slice(0, 4)}</p>
              </div>
          </li>`;
      }
    )
    .join('');
}

//Render and pagination
function pagination(key) {
  updateMovies(key);

  if(movies.length === 0){
    console.log(paginationNav);
    paginationNav.classList.add('hidden');
    return;
  }

  paginationNav.classList.remove('hidden');
  pageCount = Math.ceil(movies.length / paginationLimit);
  renderPage(1);

  prevButton.addEventListener('click', () => {
    renderPage(currentPage - 1);
  });

  nextButton.addEventListener('click', () => {
    renderPage(currentPage + 1);
  });

  paginationWrapper.addEventListener('click', e => {
    if (e.target.hasAttribute('page-index')) {
      renderPage(Number(e.target.getAttribute('page-index')));
    }
  });
}

function updateMovies(key) {
  movies = getFromLocalStorage(key);

  if (movies === null) {
    movies = [];
    clearContainer(moviesList);
    insertListItems("Oops...Nothing added.");
    return;
  }
  
}

function getFromLocalStorage(key) {
  const savedMovies = localStorage.getItem(key);
  return JSON.parse(savedMovies);
}

function renderPage(pageNum) {
  currentPage = pageNum;

 
    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;
    const currentMovies = movies.slice(prevRange, currRange);
    clearContainer(moviesList);
    insertListItems(markupMovies(currentMovies));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  

  window.innerWidth >= 768
    ? getPaginationNumbers(paginationMarkup(currentPage, pageCount))
    : getPaginationNumbers(paginationMarkupMobile(currentPage, pageCount));
  handleActivePageNumber();
  handlePageButtonsStatus();
}

function getPaginationNumbers(items) {
  clearContainer(paginationWrapper);

  const pages = items.map(item => {
    if (typeof item === 'number') {
      const pageNumber = document.createElement('button');
      pageNumber.className = 'pagination__number';
      pageNumber.innerHTML = item;
      pageNumber.setAttribute('page-index', item);
      pageNumber.setAttribute('aria-label', 'Page ' + item);
      return pageNumber;
    }

    if (typeof item === 'string') {
      const dots = document.createElement('span');
      dots.innerHTML = item;
      return dots;
    }
  });
  paginationWrapper.append(...pages);
}

function insertListItems(items) {
  moviesList.insertAdjacentHTML('beforeend', items);
}

function clearContainer(container) {
  container.innerHTML = '';
}

// Handle pagination buttons
function handleActivePageNumber() {
  document.querySelectorAll('.pagination__number').forEach(button => {
    button.classList.remove('active');

    const pageIndex = Number(button.getAttribute('page-index'));

    if (pageIndex === currentPage) {
      button.classList.add('active');
    }
  });
}

function disableButton(button) {
  button.classList.add('hidden');
}

function enableButton(button) {
  button.classList.remove('hidden');
}

function handlePageButtonsStatus() {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
}
