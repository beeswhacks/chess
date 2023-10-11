import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Square from './Square';

const getSquareMap = () => {
    const fileMap = new Map();

    fileMap.set(0, 'A');
    fileMap.set(1, 'B');
    fileMap.set(2, 'C');
    fileMap.set(3, 'D');
    fileMap.set(4, 'E');
    fileMap.set(5, 'F');
    fileMap.set(6, 'G');
    fileMap.set(7, 'H');

    const squareMap = new Map();

    for (let i = 0; i < 64; i++) {
        const file = fileMap.get(i % 8);
        const rank = 8 - Math.floor(i / 8);
        squareMap.set(i, file + rank);
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
}

const Board = ({ game }) => {
    const [piecePositions, setPiecePositions] = useState({ ...game.board.configuration.pieces });
    const squareMap = getSquareMap();

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
