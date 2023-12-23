import { useState, useEffect } from 'react';
import { status, move, aiMove, Game } from 'js-chess-engine';
import Board from './Board';
import Options from './Options';

let game = new Game();

function App() {
    const [piecePositions, setPiecePositions] = useState({ ...game.board.configuration.pieces });
    const [checkMate, setCheckMate] = useState(game.checkMate);
    const [playerColour, setPlayerColour] = useState('white');
    const [computerLevel, setComputerLevel] = useState(2);

    function updateGame() {
        // Calling moves() to re-evaluate checkMate
        game.moves();
        setPiecePositions({...game.board.configuration.pieces});
        setCheckMate(game.board.configuration.checkMate.valueOf());
    }

    const handleNewGame = async (playerColour, computerLevel) => {
        setPlayerColour(playerColour);
        setComputerLevel(computerLevel);
        game = new Game();
        updateGame();

        if (playerColour === 'black') {
            setTimeout(() => {
                game.aiMove(computerLevel);
                updateGame();
            }, 1000);
        }
    };

    return (
        <>
            <header className="text-3xl font-semibold text-center m-3 p-3">
                <h1>Chess</h1>
            </header>
            <main className="m-3 mx-auto md:columns-2 max-w-7xl">
                <section>
                    <Board
                        game={game}
                        piecePositions={piecePositions}
                        playerColour={playerColour}
                        computerLevel={computerLevel}
                        updateGame={updateGame}
                        checkMate={checkMate}
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
