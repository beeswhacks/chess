import { useState, useEffect } from 'react';
import { Game } from 'js-chess-engine';
import Board from './Board';
import Options from './Options';

function App() {
    const [game, setGame] = useState(new Game());
    const [piecePositions, setPiecePositions] = useState({ ...game.board.configuration.pieces });
    const [playerColourSelection, setPlayerColourSelection] = useState('white');
    const [playerColour, setPlayerColour] = useState('white');

    // when you update player colour, the piece positions shouldn't update immediately. only when the new game is started.
    useEffect(() => {
        setPiecePositions({ ...game.board.configuration.pieces });
    }, [game.board.configuration.pieces]);

    const handleNewGame = () => {
        setPlayerColour(playerColourSelection);
        setGame(new Game());
    };

    return (
        <>
            <header className="text-3xl font-semibold text-center m-3 p-3">
                <h1>Chess</h1>
            </header>
            <main className="m-3 md:columns-2">
                <section>
                    <Board
                        game={game}
                        piecePositions={piecePositions}
                        setPiecePositions={setPiecePositions}
                        playerColour={playerColour}
                    />
                </section>
                <section>
                    <Options
                        playerColourSelection={playerColourSelection}
                        setPlayerColourSelection={setPlayerColourSelection}
                        createNewGame={handleNewGame}
                    />
                </section>
            </main>
        </>
    );
}

export default App;
