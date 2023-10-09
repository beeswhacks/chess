import Square from "./Square";

const getSquareMap = () => {
    const fileMap = new Map();

    fileMap.set(0, 'a');
    fileMap.set(1, 'b');
    fileMap.set(2, 'c');
    fileMap.set(3, 'd');
    fileMap.set(4, 'e');
    fileMap.set(5, 'f');
    fileMap.set(6, 'g');
    fileMap.set(7, 'h');

    const squareMap = new Map();

    for (let i = 0; i < 64; i++) {
        const file = fileMap.get(i % 8);
        const rank = 8 - Math.floor(i / 8);
        squareMap.set(i, file + rank);
    }

    return squareMap;
}

const isDarkSquare = (index) => {
    const rowNumber = Math.floor(index / 8);
    return index % 2 !== rowNumber % 2;
};

const Board = () => {
    const squareMap = getSquareMap();

    return Array(64)
        .fill()
        .map((_, index) => {
            return <Square key={index} isDarkSquare={isDarkSquare(index)} position={squareMap.get(index)} />;
        });
};

export default Board;