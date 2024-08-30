# personal-portfolio
Link to my website: https://wonderful-froyo-67f0ce.netlify.app/
This my second attempt at creating a personal portfolio using React

## Setting up the environment

-   Check Node version > 16.0.0
    -   Can check by: `node -v`
-   Should have a code editor
-   Check React Vite version, and update to latest by `npm create vite@latest`
-   Install everything needed: npm install, npm run dev

    -   `npm install`
    -   install 2 fonts: `npm install @fontsource/outfit @fontsource/roboto`
    -   In the new code editor window's terminal, install npm run dev by: npm run dev
    -   Open the local host link provided in the terminal. This is your first React application. Congratulations on creating your first React application!!!

-   Introduce the 2 fonts you installed:
    -   Open main.jsx and import the 2 fonts by:
    ```js
    import '@fontsource/outfit'
    import '@fontsource/roboto'
    ```
-   Clear App.css, the <div/> in App.jsx and retain it to return Hello World for testing purposes, clear index.css.
-   Add a CSS module in vite.config.js and it should look like this at the end:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
    },
})
```

-   Rename App.css to App.module.css to use the CSS module in your app.
-   Create a file in the src folder: vars.css (for css variables) and add the following variables:

```css
:root {
    /*colors*/
    --color-text: #fff;
    --color-primary: #576cbc;
    --color-secondary: #19376d;
    --color-dark: #0b2447;
    --color-bg: #04152d;

    /*fonts*/
    --font-roboto: 'Roboto';
}
```

-   To add styling to the entire website, go to index.css and add the following:

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Outfit', Arial, Helvetica, sans-serif;
}
```

-   Add some styling to your app by opening App.jsx and changing it to:

```jsx
import styles from './App.module.css'

function App() {
    return <div className={styles.App}>Hello World!</div>
}
export default App
```

-   And change App.module.css to:

```css
@import './vars.css';
.App {
    background-color: var(--color-bg);
    width: 100%;
    height: 100%;
}
```

-   Add the assets you want to use in the app by creating an "assets" folder and adding your image/video files.
-   Optionally, add an icon file to the "public" folder to change the icon of the website.

    -   To use te icon, go to index.html and change <link> to: `cs <link rel="icon" type="image/png" href="/favicon.ico" />`

-   Lastly, create a utility function to use the images and video inside the assets folder: - Under the src folder, create a file: utils.js - Add these:
    `` js export
const getImageUrl=(path)=>{
return new URL(`../assets/${path}`, import.meta.url).href;
}; ``

## What are JSON files?

JSON files stores data in key-value pairs and it can be easily imported by a React JavaScript file, and can be rendered out.
I used JSON files for thr Experience section because that section is pretty data-intensive and that section will change as I acquire more experience, and I don't want to go in and change the JavaScript file to add/remove an experience.
