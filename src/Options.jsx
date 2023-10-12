import { useContext } from 'react';
import { PlayerColourContext } from './App';

const Options = ({ setPlayerColour, createNewGame }) => {
    const playerColour = useContext(PlayerColourContext);

    return (
        <aside className="m-3">
            <h2 className="text-xl text-center m-3">Options</h2>
            <div className="flex items-center justify-between m-5">
                <p className="grow">Player colour</p>
                <button
                    className={`${
                        playerColour === 'white' 
                            ? 'bg-green-700'
                            : 'bg-gray-500 hover:bg-green-800'
                    } p-3 mx-3 rounded-lg grow`}
                    onClick={() => setPlayerColour('white')}
                >
                    White
                </button>
                <button
                    className={`${
                        playerColour === 'black'
                            ? 'bg-green-700'
                            : 'bg-gray-500 hover:bg-green-800'
                    } p-3 mx-3 rounded-lg grow`}
                    onClick={() => setPlayerColour('black')}
                >
                    Black
                </button>
            </div>
            <div className="flex justify-center m-5">
                <button
                    className="bg-green-700 hover:bg-green-800 w-full lg:max-w-xs shadow-lg p-3 font-semibold rounded-lg"
                    onClick={createNewGame}
                >
                    New game
                </button>
            </div>
        </aside>
    );
};

export default Options;
