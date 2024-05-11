import Cards from './Cards';


function Games({games,removeGames}){
    return(
        <div className='container'>
            <div>
                <h1 className='title'>Play with joy</h1>
            </div>
            <div className='cards'>
                {
                    games.map( games=> {
                        return <Cards {...games} removeGames={removeGames} />
                    })
                }
            </div>
        </div>
    );
}

export default Games;