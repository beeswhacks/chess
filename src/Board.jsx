import { DndContext } from '@dnd-kit/core';
import Square from './Square';

const getSquareMap = (playerColour) => {
    const squareMap = new Map();

    for (let i = 0; i < 64; i++) {
        squareMap.set(i, getSquareCoordinates(i));
    }

    // If the player is playing as black, the  ranks and files need to be labeled from
    // the perspective of the black player. Assigning values to the keys in reversed order
    // achieves this.
    return playerColour === 'black' ? reverseSquareMap(squareMap) : squareMap;
};

function getSquareCoordinates(index) {
    const fileMap = new Map([
        [0, 'A'],
        [1, 'B'],
        [2, 'C'],
        [3, 'D'],
        [4, 'E'],
        [5, 'F'],
        [6, 'G'],
        [7, 'H'],
    ]);

    const file = fileMap.get(index % 8);
    const rank = 8 - Math.floor(index / 8);
    return file + rank;
}

function reverseSquareMap(squareMap) {
    const iterator = squareMap.entries();
    const reversedMap = new Map();
    let index = 63;

    for (const [key, value] of iterator) {
        reversedMap.set(index, value);
        index--;
    }

    return reversedMap;
}

const isDarkSquare = (index) => {
    const rowNumber = Math.floor(index / 8);
    return index % 2 !== rowNumber % 2;
};

const handleDragEnd = (game, event, updateGame, computerLevel) => {
    // Handle player move
    const fromSquare = event.active.id.split('-').at(-1);
    const toSquare = event.over.id;
    game.move(fromSquare, toSquare);
    updateGame();

    // Make computer move. Add delay to make it feel more realistic.
    setTimeout(() => {
        game.aiMove(computerLevel);
        updateGame();
    }, 1000);
};

const Board = ({ game, piecePositions, playerColour, computerLevel, updateGame, checkMate }) => {
    const squareMap = getSquareMap(playerColour);

    const borderColor = checkMate
        ? 'border-amber-600'
        : 'border-neutral-500';

    return (
        <DndContext onDragEnd={(event) => handleDragEnd(game, event, updateGame, computerLevel)}>
            <div className={`container rounded-md ${borderColor} shadow-xl border-4 md:break-after-column aspect-square grid grid-cols-8 gap-0`}>
                {Array(64)
                    .fill()
                    .map((_, index) => {
                        const position = squareMap.get(index);
                        const piece = piecePositions[position];

                        return (
                            <Square
                                key={index}
                                isDarkSquare={isDarkSquare(index)}
                                position={position}
                                piece={piece}
                            />
                        );
                    })}
            </div>
        </DndContext>
    );
};

export default Board;
