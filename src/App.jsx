import { useState, useEffect } from 'react';
import { status, move, aiMove, Game } from 'js-chess-engine';
import Board from './Board';
import Options from './Options';

let game = new Game({
    "fullMove": 3,
    "halfMove": 1,
    "enPassant": null,
    "isFinished": false,
    "checkMate": false,
    "check": false,
    "turn": "white",
    "pieces": {
        "E1": "K",
        "D1": "Q",
        "A1": "R",
        "H1": "R",
        "C1": "B",
        "F1": "B",
        "B1": "N",
        "G1": "N",
        "A2": "P",
        "B2": "P",
        "C2": "P",
        "D2": "P",
        "E2": "P",
        "H2": "P",
        "E8": "k",
        "A8": "r",
        "H8": "r",
        "C8": "b",
        "F8": "b",
        "B8": "n",
        "G8": "n",
        "A7": "p",
        "B7": "p",
        "C7": "p",
        "D7": "p",
        "F7": "p",
        "G7": "p",
        "H7": "p",
        "F3": "P",
        "E5": "p",
        "G4": "P",
        "D8": "q"
    },
    "castling": {
        "whiteShort": true,
        "blackShort": true,
        "whiteLong": true,
        "blackLong": true
    }
});

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
