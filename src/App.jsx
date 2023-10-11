import { createContext, useState } from 'react';
import { Game } from 'js-chess-engine';
import Board from './Board';
import Options from './Options';

export const PlayerColourContext = createContext('white');

function App() {
    const [game, setGame] = useState(new Game())
    const [playerColour, setPlayerColour] = useState('white');

    return (
        <>
            <PlayerColourContext.Provider value={playerColour}>
                <header className="text-3xl font-semibold text-center m-3 p-3">
                    <h1>Chess</h1>
                </header>
                <main className="m-3 md:columns-2">
                    <section>
                        <Board game={game} />
                    </section>
                    <section>
                        <Options 
                            setPlayerColour={setPlayerColour}
                            createNewGame={() => {
                                setGame(new Game())
                            }}
                        />
                    </section>
                </main>
            </PlayerColourContext.Provider>
        </>
    );
}

export default App;
