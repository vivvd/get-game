import { options, urlRandomGame } from "../data/data";
const getRandomGame = async (category) => {
    try {
      const categoryUrl = category ? `${urlRandomGame}?category=${category}` : urlRandomGame;
      const randomGameResponse = await fetch(categoryUrl, options);
      if (randomGameResponse.ok) {
        const jsonRandomGameResponse = await randomGameResponse.json();
        const randomIndex = Math.floor(Math.random() * jsonRandomGameResponse.length);
        console.log(jsonRandomGameResponse[randomIndex])
        return jsonRandomGameResponse[randomIndex]
      }
    } catch (error) {
      console.log(error);
    }
  };

  export {getRandomGame}