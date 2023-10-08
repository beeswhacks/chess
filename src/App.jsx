import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const getSquareColour = (index) => {
        const rowNumber = Math.floor(index / 8);
        return index % 2 === rowNumber % 2 ? 'bg-slate-400' : 'bg-slate-500';
    }

    return (
        <>
            <div className="aspect-square grid grid-cols-8 gap-0">
                {Array(64)
                    .fill()
                    .map((_, index) => {
                        return (
                            <div key={index} className={`${getSquareColour(index)}`}>
                            </div>
                        );
                    })}
            </div>
        </>
    );
}

export default App;
