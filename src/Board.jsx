const getSquareColour = (index) => {
    const rowNumber = Math.floor(index / 8);
    return index % 2 === rowNumber % 2 ? 'bg-slate-400' : 'bg-slate-500';
};

const Board = () => {
    return Array(64)
        .fill()
        .map((_, index) => {
            return <div key={index} className={`${getSquareColour(index)}`}></div>;
        });
};

export default Board;