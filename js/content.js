/*
 * HoC site content — edit THIS file to update the site.
 * Everything that changes often lives here: links, downloads, news, eras, games.
 * Text fields take { en, pt }. Leave a link as '' to hide its button/icon.
 */
window.HOC = {

  /* ---- Links ---------------------------------------------------------- */
  links: {
    // Epic Games Store page (works once the product is live on the store).
    epicStore: 'https://store.epicgames.com/p/hoc-be3b3d',
    discord: 'https://discord.gg/EJ8BTv39P',
    googlePlay: '',   // Android: coming soon
    itch: ''
  },

  // Social icons in the footer; only the ones with a URL are shown.
  social: {
    discord: 'https://discord.gg/EJ8BTv39P',
    youtube: '',
    twitch: '',
    x: '',
    instagram: '',
    facebook: '',
    tiktok: ''
  },

  /* ---- News (newest first; the home page shows the first 3) ------------ */
  news: [
    {
      date: '2026-10',
      tag: { en: 'News', pt: 'Novidades' },
      title: { en: 'Free demo and crossplatform on the way', pt: 'Demo grátis e crossplatform a caminho' },
      text: {
        en: 'Hero of Cultures is coming to the Epic Games Store as a full game with a free demo. PC and Android crossplatform play is coming soon - one game, the same battles on desktop and mobile.',
        pt: 'O Hero of Cultures chega à Epic Games Store como jogo completo, com uma demo grátis. O jogo crossplatform entre PC e Android vem em breve - um só jogo, as mesmas batalhas no computador e no telemóvel.'
      },
      image: 'img/shots/shot_03.webp'
    }
  ],

  /* ---- Eras (the "Rise through the eras" row) -------------------------- */
  eras: [
    { en: 'Origins',  pt: 'Origens',  d: { en: 'Villagers, gathering and building - found your people', pt: 'Aldeões, recolha e construção - funda o teu povo' } },
    { en: 'Kingdoms', pt: 'Reinos',   d: { en: 'Armies: infantry, archers, cavalry and siege', pt: 'Exércitos: infantaria, arqueiros, cavalaria e cerco' } },
    { en: 'Empires',  pt: 'Impérios', d: { en: 'Your hero rises: new look and upgrades for your army', pt: 'O teu herói ascende: novo visual e melhorias para o exército' } }
  ],

  /* ---- More games from PraeliaLab (the "More games" row; link '' = Coming soon) ---- */
  moreGames: [
    {
      title: 'Stickman Ultimate',
      genre: { en: 'Fighting', pt: 'Luta' },
      platforms: 'Android · PC',
      status: { en: 'Early Access', pt: 'Early Access' },
      text: {
        en: 'Fast stickman fighting - online & LAN 1v1 battles.',
        pt: 'Luta de stickman rápida - batalhas 1v1 online e em LAN.'
      },
      link: 'stickman/',
      image: 'stickman/img/feature.webp'
    },
    {
      title: 'Target',
      genre: { en: 'Battle royale', pt: 'Battle royale' },
      platforms: 'PC · mobile and consoles later',
      status: { en: 'Early Access', pt: 'Early Access' },
      text: {
        en: '100-player first-person battle royale with shields and swords. Peek in third person. Get marked. Become the target.',
        pt: 'Battle royale na primeira pessoa para 100 jogadores, com escudos e espadas. Espreita na terceira pessoa. Fica marcado. Torna-te o alvo.'
      },
      link: 'target/',
      image: 'target/img/keyart.webp'
    }
  ],

  /* ---- Games in the series -------------------------------------------- */
  games: [
    {
      title: 'HoC II',
      genre: { en: 'Real-time strategy — base game', pt: 'Estratégia em tempo real — jogo base' },
      platforms: 'PC · Android (coming soon)',
      status: { en: 'Early Access — free demo', pt: 'Early Access — demo grátis' },
      text: {
        en: 'The RTS mode of Hero of Cultures: heroes, armies and historical battles — on PC now, on mobile soon.',
        pt: 'O modo RTS do Hero of Cultures: heróis, exércitos e batalhas históricas — no PC agora, no telemóvel em breve.'
      },
      link: '#play',
      image: 'img/cover.webp'
    },
    {
      title: 'HoC: Spartakos',
      genre: { en: 'Third-person action — base game', pt: 'Ação na terceira pessoa — jogo base' },
      platforms: 'PC · Android',
      status: { en: 'In development', pt: 'Em desenvolvimento' },
      text: {
        en: 'From the arena to freedom: fight as Spartakos, in the same game.',
        pt: 'Da arena à liberdade: luta como Spartakos, no mesmo jogo.'
      },
      link: '#modes',
      image: 'img/spartakos/ludus_arena_fight2.webp'
    },
    {
      title: 'HoC: Discoveries',
      genre: { en: 'DLC — third-person adventure + new RTS cultures', pt: 'DLC — aventura na terceira pessoa + novas culturas no RTS' },
      platforms: 'PC · Android',
      status: { en: 'Coming later', pt: 'Mais tarde' },
      text: {
        en: 'Sail beyond the known world: Portuguese, Spanish, English and French.',
        pt: 'Navega além do mundo conhecido: Portugueses, Espanhóis, Ingleses e Franceses.'
      },
      link: '',
      image: ''
    }
  ],

  /* ---- System requirements (bottom of the page) ---------------------- */
  requirements: [
    { title: { en: 'PC - minimum', pt: 'PC - mínimos' }, tag: { en: 'Windows', pt: 'Windows' }, rows: [
      [{ en: 'OS', pt: 'Sistema' }, 'Windows 10/11 64-bit'],
      [{ en: 'Processor', pt: 'Processador' }, { en: '4 cores, 2.5 GHz', pt: '4 núcleos, 2,5 GHz' }],
      [{ en: 'Memory', pt: 'Memória' }, '8 GB RAM'],
      [{ en: 'Graphics', pt: 'Gráfica' }, 'DirectX 12, GTX 1050 Ti / RX 570 (4 GB)'],
      [{ en: 'Storage', pt: 'Disco' }, { en: '10 GB available', pt: '10 GB livres' }]
    ] },
    { title: { en: 'PC - recommended', pt: 'PC - recomendados' }, tag: { en: 'Windows', pt: 'Windows' }, rows: [
      [{ en: 'OS', pt: 'Sistema' }, 'Windows 11 64-bit'],
      [{ en: 'Processor', pt: 'Processador' }, { en: '6 cores, 3.5 GHz', pt: '6 núcleos, 3,5 GHz' }],
      [{ en: 'Memory', pt: 'Memória' }, '16 GB RAM'],
      [{ en: 'Graphics', pt: 'Gráfica' }, 'GTX 1660 / RX 5600 XT (6 GB) or better'],
      [{ en: 'Storage', pt: 'Disco' }, { en: '10 GB on SSD', pt: '10 GB em SSD' }]
    ] },
    { title: { en: 'Android - coming soon', pt: 'Android - em breve' }, tag: { en: 'Phones and tablets', pt: 'Telemóveis e tablets' }, rows: [
      [{ en: 'OS', pt: 'Sistema' }, 'Android 10+ (arm64)'],
      [{ en: 'Memory', pt: 'Memória' }, '6 GB RAM'],
      [{ en: 'Tested on', pt: 'Testado em' }, 'Samsung Galaxy A55'],
      [{ en: 'Storage', pt: 'Disco' }, { en: '3 GB available', pt: '3 GB livres' }]
    ] }
  ]
};
