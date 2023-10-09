const Square = ({ isDarkSquare, position }) => {
    const colour = isDarkSquare ? 'bg-slate-500' : 'bg-slate-300';
    return <div className={`${colour}`}></div>;
};

export default Square;
