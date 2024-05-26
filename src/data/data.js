const urlRandomGame = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ded6939876msh2dac65c02e666d9p1149c9jsn1a247d0dc494',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

const categories = {
  shooter:'Shooter',
  strategy:'Strategy',
  moba:'Moba',
  'open-world': 'Open world',
  horror:'Horror'
}

export {urlRandomGame, options, categories};