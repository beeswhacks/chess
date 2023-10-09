const Square = ({ isDarkSquare, position, piece }) => {
    const lightColour = 'bg-emerald-100';
    const darkColour = 'bg-blue-950';
    const colour = isDarkSquare ? darkColour : lightColour;
    const textColor = colour === darkColour ? 'text-white' : 'text-black';
    console.log(position + ': ' + piece);
    return <div className={`${colour} ${textColor} text-center align-middle aspect-square`}>{piece}</div>;
};

export default Square;
