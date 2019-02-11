This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The template looks like this: https://dajanas.github.io/Static-Content-Website/

## Beginner's guide

**Note:** A prerequisite for this to work at your machine is to have [NodeJS](https://nodejs.org/en/download/) installed.

1. Start by getting the project on your local machine.
    - If you're not using Git, only download the .zip file.
    - If you're using Git, clone the project. You can do this by opening a console, then navigate to some location and
    run the following command: `git clone git@github.com:DajanaS/Static-Content-Website.git`
2. Rename the folder as you want your own project to be called.
3. Navigate inside the root of this project. All commands will be executed in the project root from now on.
* Optional: In case you want your own repository for your project on Git, then create one there and change the existing
origin, example: `git remote set-url origin git@github.com:DajanaS/Effective-Java.git`
4. Install all the needed packages (node_modules) by running: `npm install`. Check them out in the [package.json](./package.json).
5. Run the app in development mode: `npm start`.
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    - The page will reload if you make edits.
    - You will also see any lint errors in the console.
* Optional: Deploy to GitHub Pages. You can follow this [guide](https://github.com/gitname/react-gh-pages).

## Introduction

All the source code is inside [/src](./src) folder. There are several components, set into [/components](./src/components)
and they are marked on the image below:

![](./public/components.PNG)

- The orange box represents the Header component.
- The blue box represents the Main Container component. The following two are its children.
- The red box represents the Menu component.
- The purple box represents the Content component.
- The green box represents the Footer component.

There is a folder for each of the components where its source code is set (which is the .js file) and its stylesheet
file (.scss).

Open the project in your favorite IDE and... good luck!
I suggest to start changing the name of the project into [package.json](./package.json) and set your own project name.
The name shouldn't contain spaces! You might even want to create your own logo, then create an .ico file out of it and
change the [favicon.ico](./public/favicon.ico)!

## Set your own content

We need to adjust this site in order to have our own content displayed.
- For setting the content the only file that needs to be modified is [PagesIndex.js](./src/components/Content/PagesIndex.js).
Set the variable `maxPages` to be equal on the number of pages that you would like to have. By default there is also the Welcome page included.
If you don't need a welcome page, then please don't forget to change the default value of `activeContentId: 0` in the
state inside [Main Container](./src/components/MainContainer/MainContainer.js), if you don't have 0 page then set 1 here, or similar.
There is an example of how to provide titles that will be showing in the menu, so just continue following the same pattern. 
- The pages are placed in the folder [/pages](./src/pages) and there we set the content for each.
- For better preview of some source code examples, I suggest to use the `<code>` tag around the code blocks.
- The project is created in React and it is using JSX language, which is Javascript in the background, not HTML. This
means that there are small differences when setting the content within the .js classes. One example is using `className`
instead of `class`, as it can be noticed in the existing sample Content pages: `<div className="animated fadeIn">` (used
for setting a simple fade in animation to the content, when it appears).

## UI design

All style changes are done within the files .scss for the adequate component.
- For changing the background, go to [App.scss](./src/App.scss) and change it into the `body` block.
- The header and footer text are simply within the [Header](./src/components/Header/Header.js) and
[Footer](./src/components/Footer/Footer.js) components adequately, so it can be modified there.
- For modifying the colors (text, background...) of the [Header](./src/components/Header/Header.scss) and the
[Footer](./src/components/Footer/Footer.scss), all adjustments need to be done into their correspondent blocks named
`#header` and `#footer`, placed inside their .scss files.
- You might want to add some shadow to the [Header](./src/components/Header/Header.scss) to bring it upfront, just add
something like this:<br />
`box-shadow: 0 10px 6px -6px #0000006E;` into the `#header` block.
- For deleting the transparent window block of the [Main Container](./src/components/MainContainer/MainContainer.scss),
delete the whole `#main:after` block, or also there you could change its opacity and background (currently 
lightgoldenrodyellow).
- For changing the text color of the [Menu](./src/components/Menu/Menu.scss) in yellow for example, set the property
`color: yellow;` into the `#menu` block and the same can be applied for any other component.
- For changing the separator's color, or removing it, go to the [Menu](./src/components/Menu/Menu.scss) component and
modify/remove this:<br />
`border-right: solid darkred thin;` line.
- For changing the styling of the menu elements when the mouse hovers over them, change/add properties into the block
`li:hover` in the [Menu](./src/components/Menu/Menu.scss) component.
- The red arrow pointer is under [images](./src/images) folder, so if you want another color or symbol, copy and paste
 a new image there, then inside [Menu](./src/components/Menu/Menu.scss) change the url of the `background` property into the
 `.active` block, or remove it entirely in order not to have any pointer.
- The scrollbar colors and form can be changed into [App.scss](./src/App.scss), by targeting any css block consisting
the word 'scrollbar'.
- For changing the color of the selected text, go to [App.scss](./src/App.scss) and change the `color` and
`background` properties of the two blocks consisting the 'selection' word.
- In order to prevent displaying the site not-nicely on small devices, there is an error message coming out at the moment.
You can change this by deleting the `<h2 id="error">` line into [App.js](./src/App.js) along with its style, which is
 the `#error` block placed inside [App.scss](./src/App.scss).
 - If you want a nicely displayed layout on small screens, you need to make a new css for the elements on the page inside
 the media query block in [App.scss](./src/App.scss):<br />
`@media only screen and (max-width: 540px) {
  // place here all stlying for the elements
}`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

... or you can also contact me on my mail: dajana.sk@hotmail.com and I am happy to answer some questions you might have.
You might also want to add different non-conventional fonts on your site, or make your application a
[PWA](https://github.com/DajanaS/PWA) with small adjustments. Also, different guides about how this can be done can be found on Google.
Good luck once again, and if you have used this template as a start of something, I am happy to see how it came out! :)