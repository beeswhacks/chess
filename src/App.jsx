import { useState } from 'react';
import { Game } from 'js-chess-engine';
import Board from './Board';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const game = new Game();

    return (
        <>
            <header className="text-2xl text-center m-3 p-3">
                <h1>Chess</h1>
            </header>
            <main className='m-3 md:columns-2'>
                <section className="md:break-after-column aspect-square grid grid-cols-8 gap-0">
                    <Board />
                </section>
                <section>
                    <h2 className='text-xl text-center m-3 p-3'>Options</h2>
                    This is where the options will go
                </section>
            </main>
        </>
    );
}

export default App;
