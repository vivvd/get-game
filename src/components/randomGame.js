const RandomGame = ({randomGame}) => {
    return (
        <div className='game'>
          <div className='gameImg'>
          <img src={randomGame.thumbnail} alt={randomGame.title} />
          </div>
          <div className='gameData'>
          <h1>{randomGame.title}</h1>
          <p>{randomGame.description}</p>
          <p><strong>Genre:</strong> {randomGame.genre}</p>
          <p>Platform: {randomGame.platform}</p>
          <p>Description: {randomGame.short_description}</p>
          <a href={randomGame.game_url}>Link to the game page</a>
          </div>
        </div>
    )
} 

export {RandomGame};