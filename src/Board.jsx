import { useContext, useEffect, useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Square from './Square';
import { PlayerColourContext } from './App';

const getSquareMap = (playerColour) => {
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

    const squareMap = new Map();

    const getSquareCoordinates = (index) => {
        const file = fileMap.get(index % 8);
        const rank = 8 - Math.floor(index / 8);
        return file + rank;
    };

    for (let i = 0; i < 64; i++) {
        squareMap.set(i, getSquareCoordinates(i));
    }

    if (playerColour === 'black') {
        const iterator = squareMap.entries();
        const reversedMap = new Map();
        let index = 63;

        for (const [key, value] of iterator) {
            reversedMap.set(index, value);
            index--;
        }

        return reversedMap;
    }

    return squareMap;
};

const isDarkSquare = (index) => {
    const rowNumber = Math.floor(index / 8);
    return index % 2 !== rowNumber % 2;
};

const handleDragEnd = (event, game, setPiecePositions) => {
    const fromSquare = event.active.id.split('-').at(-1);
    const toSquare = event.over.id;
    game.move(fromSquare, toSquare);
    setPiecePositions({ ...game.board.configuration.pieces });
};

const Board = ({ game }) => {
    const [piecePositions, setPiecePositions] = useState({ ...game.board.configuration.pieces });
    const playerColour = useContext(PlayerColourContext);
    const squareMap = getSquareMap(playerColour);

    useEffect(() => {
        setPiecePositions({ ...game.board.configuration.pieces });
    }, [game.board.configuration.pieces]);

    return (
        <DndContext onDragEnd={(event) => handleDragEnd(event, game, setPiecePositions)}>
            <div className="container rounded-md border-neutral-500 shadow-xl border-4 md:break-after-column aspect-square grid grid-cols-8 gap-0">
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
