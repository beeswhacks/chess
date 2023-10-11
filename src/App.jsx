import { createContext, useState } from 'react';
import { Game } from 'js-chess-engine';
import Board from './Board';
import './App.css';

export const PlayerColourContext = createContext('white');

function App() {
    const game = new Game();
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
                        <h2 className="text-xl text-center m-3 p-3">Options</h2>
                        This is where the options will go
                    </section>
                </main>
            </PlayerColourContext.Provider>
        </>
    );
}

export default App;
