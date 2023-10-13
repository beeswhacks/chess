import { useState, useEffect } from 'react';
import { Game } from 'js-chess-engine';
import Board from './Board';
import Options from './Options';

function App() {
    const [game, setGame] = useState(new Game());
    const [piecePositions, setPiecePositions] = useState({ ...game.board.configuration.pieces });
    const [playerColour, setPlayerColour] = useState('white');
    const [computerLevel, setComputerLevel] = useState(2);

    useEffect(() => {
        // If player is playing as black, computer needs to make the first move
        if (game.board.history.length === 0 && playerColour === 'black') {
            setTimeout(() => {
                game.aiMove(computerLevel);
                setPiecePositions({ ...game.board.configuration.pieces });
            }, 1000);
        }

        setPiecePositions({ ...game.board.configuration.pieces });
    }, [game]);

    const handleNewGame = (playerColour, computerLevel) => {
        setPlayerColour(playerColour);
        setComputerLevel(computerLevel);
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
                    <Options createNewGame={handleNewGame} />
                </section>
            </main>
        </>
    );
}

export default App;
