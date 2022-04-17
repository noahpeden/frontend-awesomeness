# Noah Peden's True Link FE Exercise
I had a lot of fun with this! A couple of points I'd like to go over: 
- I used MUI for the design system and relied on the docs a lot for the responsive drawer and grid system. It was a great learning experience. 
- I probably spent too much time messing with MUI, but I wanted it to look nice, and I know I could do it a lot quicker with just using `@emotion/react` or `styled-components` aka plain SCSS. 
- I unit tested every component using React Testing Library. I feel pretty confident in the tests I wrote, but left two "to do's" with two things that I thought were trivial and could be figured out later
- I created the `useMovieApi` hook so that I could have access to a reusable piece of logic to call the OMDBAPI which also had loading and error states (I love that out of the box functionality with `useQuery` from Apollo and wanted to recreate it).
- For state in between components, I used Context, and created three small pieces of state: `dialogOpen` for opening up a Movie Card, `movieData` for passing the data to the dialog on click of a card, and `mobileOpen` for handling when the side nav would be open or closed in mobile 
- Two notes on the above context: If our state got any more complex, I'd probably want to move to redux as I'm already a little wary with how much MovieContext might be re-rendering the app. Secondly, we could also probably move the `movieData` to just be a prop passed down to the Dialog component, but I wanted it in context to be available in case we need it later. Probably a tiny bit overly pre-optimized in this case.


# Demo of app and how to run `npm start`:
![startup](https://user-images.githubusercontent.com/15061527/163726128-d498fc1e-9233-4548-9fa4-60bd33ee19a7.gif)


# Getting Started with True Link FE

## Available Scripts

In the project directory, after cloning the repository you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test <filename>`

Launches the test runner for a specific test file, useful for when you just want to debug a certain file.

### Demo of running `npm test` and `npm test <filename>`
![testing](https://user-images.githubusercontent.com/15061527/163726184-6c75e0e9-dcd9-4e2f-a43a-ef36c999e8f5.gif)


## Acceptance Criteria
I've put these AC in checkboxes for ease of checking my work:

### Desktop
- [ ] Display gallery styled main page with a left sidebar.
- [ ] The left side bar is visible with static menu items “Menu 1” through “Menu 7”
- [ ] Display one card for each movie in the omdbapi search results for movies with the word
“super” in the title.
- [ ] Each movie card contains: Title, Year, Image
- [ ] Clicking on a card opens a pop up with additional information about the movie. Display
any of the following if available: Title, Year, Rated, Released, Runtime,
Genre, Director, Writer, Actors, Plot, Language, Country, Poster.
- [ ] The pop up should have a close button in the top right corner and be dismissed if clicked
outside of it.

### Mobile
- [ ] Page width < 600px
- [ ] Display movie cards in a single column.
- [ ] The left side bar is no longer visible.
- [ ] There is a hamburger icon in the top left corner.
- [ ] When clicking on the hamburger icon, slide the static menu bar over the movie gallery ,
and change the hamburger icon to `X`.
- [ ] Clicking on the `X` icon closes the static menu bar and displays the movie gallery again

### Accessibility
- I used MUI's accessibility color picker to choose blues and whites that wouldn't contrast too much with large text (> 16px):
<img width="1196" alt="Screen Shot 2022-04-15 at 8 44 55 PM" src="https://user-images.githubusercontent.com/15061527/163726988-277c7a35-f528-466c-9af8-5bb5c68189be.png">

#### WAVE (accessibility extension) check:
No errors!!! Yay.
![Screen Shot 2022-04-17 at 2 09 21 PM](https://user-images.githubusercontent.com/15061527/163727016-dd1bacb2-cf77-450c-ae53-d511fdb40ade.png)




### Outstanding To Do's
- [ ] I feel like a smoother transition from 3 movie cards to one would be to show 2 at 800px or something, but I left it as a to do
- [ ] I had trouble mocking `useMediaQuery` in one of my tests and it should be addressed at some point
- [ ] When testing my custom hook, `useMovieApi`, I had trouble with rendering the hook multiple times, and even with following a Kent C Dodds article about it had to render it once above all the tests, which isn't a great pattern, but again I feel like we could refactor it and update it later.
