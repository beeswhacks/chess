import { useDraggable, useDroppable } from '@dnd-kit/core';
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
    const {
        attributes,
        listeners,
        setNodeRef: setDraggableNodeRef,
        transform,
    } = useDraggable({
        id: piece + '-' + position,
    });

    const { isOver, setNodeRef: setDroppableNodeRef } = useDroppable({
        id: position,
    });

    const lightSquareColor = 'bg-green-100';
    const darkSquareColor = 'bg-green-800';
    const squareColor = isDarkSquare ? darkSquareColor : lightSquareColor;
    const squareColorWithDrag = isOver ? 'bg-neutral-700' : squareColor;

    const transformPiece = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          }
        : undefined;

    return (
        <div ref={setDroppableNodeRef} className={`${squareColorWithDrag} aspect-square`}>
            {piece && (
                <img
                    ref={setDraggableNodeRef}
                    style={transformPiece}
                    src={pieceMap.get(piece)}
                    alt={`${piece} on ${position}`}
                    {...listeners}
                    {...attributes}
                />
            )}
        </div>
    );
};

export default Square;
