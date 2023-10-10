
// Import piece SVGs
import { b, k, n, p, q, r, B, K, N, P, Q, R } from './assets';

const pieceMap = new Map([
    ['p', p],
    ['n', n],
    ['b', b],
    ['r', r],
    ['q', q],
    ['k', k],
    ['P', P],
    ['N', N],
    ['B', B],
    ['R', R],
    ['Q', Q],
    ['K', K],
]);


const Square = ({ isDarkSquare, position, piece }) => {
    const lightColour = 'bg-emerald-100';
    const darkColour = 'bg-emerald-800';
    const colour = isDarkSquare ? darkColour : lightColour;
    const textColor = colour === darkColour ? 'text-white' : 'text-black';

    return (
        <div className={`${colour} ${textColor} text-center align-middle aspect-square`}>
            {piece && <img src={pieceMap.get(piece)} alt={`${piece} on ${position}`} />}
        </div>
    );
};

export default Square;
