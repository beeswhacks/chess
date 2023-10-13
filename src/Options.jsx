const Options = ({ createNewGame }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const playerColour = formData.get('playerColour');
        const computerLevel = formData.get('computerLevel');
        createNewGame(playerColour, computerLevel);
    };

    return (
        <aside className="my-5 md:my-3 mx-auto max-w-md">
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2 className="text-xl text-center m-3">Options</h2>
                <div className="flex items-center justify-stretch m-5">
                    <label htmlFor="playerColour" className="grow w-1/2 mr-3">
                        Player colour
                    </label>
                    <select
                        name="playerColour"
                        className="p-2 w-1/2 rounded-lg grow bg-neutral-700 text-white"
                    >
                        <option value="white">White</option>
                        <option value="black">Black</option>
                    </select>
                </div>
                <div className="flex items-center justify-stretch m-5">
                    <label htmlFor="computerLevel" className="grow w-1/2 mr-3">
                        Computer level
                    </label>
                    <select
                        name="computerLevel"
                        className="p-2 w-1/2 rounded-lg grow bg-neutral-700 text-white"
                    >
                        <option value="0">Monkey</option>
                        <option value="1">Beginner</option>
                        <option value="2">Intermediate</option>
                        <option value="3">Advanced</option>
                        <option value="4">Experienced</option>
                    </select>
                </div>
                <div className="flex justify-center m-5">
                    <button
                        className="bg-green-700 hover:bg-green-800 w-full shadow-lg p-3 font-semibold rounded-lg"
                        type="submit"
                    >
                        New game
                    </button>
                </div>
            </form>
        </aside>
    );
};

export default Options;
