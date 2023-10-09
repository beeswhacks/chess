const getSquareColour = (index) => {
    const rowNumber = Math.floor(index / 8);
    return index % 2 === rowNumber % 2 ? 'bg-zinc-300' : 'bg-zinc-500';
};

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

const Board = () => {
    const squareMap = getSquareMap();

    return Array(64)
        .fill()
        .map((_, index) => {
            return <div key={index} className={`${getSquareColour(index)}`}></div>;
        });
};

export default Board;