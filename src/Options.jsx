const Options = ({ setPlayerColour, createNewGame }) => {
    return (
        <>
            <h2 className="text-xl text-center m-3 p-3">Options</h2>
            <div>Player colour</div>
            <button
                className="bg-green-700 hover:bg-green-800 w-full md:w-auto shadow-lg p-3 font-semibold rounded-lg"
                onClick={createNewGame}
            >
                New game
            </button>
        </>
    );
};

export default Options;
