# chess

A browser-based chess game (deployed [here](https://rainbow-empanada-480911.netlify.app/)).

<img src='https://github.com/beeswhacks/chess/assets/90331266/fb48ba15-6f50-4ecd-8550-8957cde69fd0' width=300px/>

Made with React, Tailwind, and [js-chess-engine](https://github.com/josefjadrny/js-chess-engine).

## Reflection
### The lessons
- I decided to use JavaScript - or more accurately I decided **not** to use TypeScript - which I kind of regretted in the end. In the week that I started this project, I had been playing whack-a-mole with TS errors at work. I was so fed up that I decided to cast off TS and use good old JS. I found that I missed the TS compiler's early reminders that such and such a method/property didn't exist.
- The drag and drop functionality that I originally used for moving pieces didn't work at all well on mobile - one to remember.
- I had some issues detecting when check mate was happening, and reflecting this in the UI. I assumed that it was due to my state management, or some other React effect. It ended up being due to the chess engine library I was using. I skipped a crucial step in my debugging, made an assumption, and it cost me a few days’ work.
- I should have encapsulated the chess engine in my own module, exposing the methods and properties I needed via this. My app is currently very tightly coupled to the external chess engine library, which is a weakness.

### The wins
- First time using Tailwind and I really liked it. I found working with utility classes provided a nice developer experience. The `className` statements wide enough to park a bus in are unfortunate, but are worth the trade off for me.
