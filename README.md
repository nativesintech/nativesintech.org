![Natives in Tech](./public/images/natives-in-tech-logo-github.png)

# Natives in Tech

Hello and welcome 👋. This is the repository for the Natives in Tech website. The website was created to give Natives in Tech a presence on the web and make it easier for this organization to be found by search engines. There are a lot of talented Native developers out there and we want to do our best to connect with them. This project is open source and we welcome contributions from the open source community! Please be advised we do have a [Code of Conduct](./CODE_OF_CONDUCT). Please give that a read if you would like to be a contributor. Thank you again for visiting this repo and we hope you can contribute your talent to this effort.

## Tech Stack 📚

This project uses modern tooling to build the site. Below is a list of those tools and resources you can find to learn more about them in case you are interested in contributing to the project in the future.

### ReasonML and ReasonReact λ

[ReasonML](https://reasonml.github.io/reason-react/) is a functional programming language that compiles down to JavaScript. It provides a lot of [ES2016+](https://babeljs.io/) features out of the box and has bindings to popular libraries like [React](https://reactjs.org/). This project uses [ReasonReact](https://reasonml.github.io/reason-react/) as its templating and style language. Specifically, we are using[Phenomic](https://phenomic.io/)'s ReasonReact configuration. For this reason, there are some residual files which are not being used currently but will likely be utilized in the future.

### ES2016+ 🤓

In some instances JavaScript is needed. For example, in the [App.js](./App.js) and [Html.js](./Html.js) files.

### CSS-in-JS 💅

The [bs-css](https://babeljs.io/) library is the CSS-in-JS library used to style components/elements on the page. It uses the popular [emotion](https://emotion.sh/) library under the hood. Global styles can be found in [global.css](./global.css). For minifying and other post processing [PostCSS](https://postcss.org/) is used.

### Netlify 🛫

Deployment of the master branch and pull requests are built through the [Netlify](https://www.netlify.com/) service. This makes it easy for maintainer and contributors to check their work before merging into the master branch.

### Webpack 🎒

For a local development environment [webpack](https://webpack.js.org/) is utilized.

### Yarn 📦

Packages are managed using [yarn](https://yarnpkg.com/en/) for more deterministic builds.

## Getting Started 🚀

Running the application locally requires a few steps.

- Clone this repository to your desktop (or somewhere else on your computer): `git clone git@github.com:nativesintech/natives-in-tech.git`
- From the terminal, install dependencies: `$ yarn install`
- From the terminal, run the app in development mode: `$ yarn start`
- You now have app running and can browse to `localhost:3333` to see it live!

## Road Map 🗺

- [ ] - An Awesome Natives in Tech page per the info [here](https://github.com/nativesintech/awesome-natives-in-tech)
- [ ] - A page dedicated to the Natives in Tech conference
- [ ] - A page for users to nominate others for Awesome Natives in Tech
- [ ] - A fancy error page for when pages don't exist (current error page looks 🤮)
- [ ] - Move [blog](https://medium.com/natives-in-tech) from Medium to this site
- [ ] - Build out a test suite to test the site
- [ ] - Make this site awesome in anyway possible 😂

## Contributing 📝

If you would like to make a change to this repo then fork the repository and then submit a PR. If the build passes on Netlify there's a good chance it will be merged.
