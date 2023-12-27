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

const Square = ({ isDarkSquare, position, piece, onClick, highlightedSquare }) => {
    const lightSquareColor = 'bg-green-100';
    const darkSquareColor = 'bg-green-800';
    let squareColor = isDarkSquare ? darkSquareColor : lightSquareColor;
    if (highlightedSquare === position) {
        squareColor = 'bg-neutral-700';
    }

    return (
        <div className={`${squareColor} aspect-square`} onClick={onClick}>
            {piece && <img src={pieceMap.get(piece)} alt={`${piece} on ${position}`} />}
        </div>
    );
};

export default Square;
