# Getting Started

This is the React-core template to be used to start all other projects.

This project uses npm and typescript.

#### Prerequisites

The setups steps expect the following tools installed on your system.

- Git
- NodeJS >= 14.0.0
- NPM >= 5.6
- Typescript

#### 0. Install typescript globally

```bash
npm i -g typescript ts-node
```

## Installation

#### 1. Check out the repository

```bash
git clone https://github.com/
```

or, if you prefer, via SSH (recommended)

```bash
git clone git@github.com:
```

#### 2. Install all of your dependencies

```bash
npm install
```

or

```bash
npm i
```

## Next Steps

Go to your package.json and change the name and version of your project

Now you're ready to start coding 😃

## Folder Structure Conventions

Folder structure options and naming conventions for our projects

### A typical top-level directory layout

```
  📦project
  ┣ 📂build               # Compiled files (folder used for deploy)
  ┣ 📂public              # Public files
  ┣ 📂src                 # Source files
  ┣ 📂test                # Automated tests
  ┣ 📜package.json
  ┣ 📜README.md
  ┗ 📜tsconfig.json
```

Use short lowercase names at least for the top-level files and folders except `README.md`

### Source files

The actual source files of a software project are usually stored inside the `src` folder.

```
  📦src                   # Source files
  ┣ 📂actions
  ┣ 📂api
  ┣ 📂assets
  ┃ ┣ 📂images            # For storing images like logos, otherwise use a CDN
  ┃ ┗ 📂...
  ┣ 📂components
  ┃ ┣ 📂Button            # Example of a component folder
  ┃ ┗ 📂...
  ┣ 📂config
  ┣ 📂constants
  ┣ 📂context
  ┣ 📂interfaces
  ┣ 📂layouts
  ┣ 📂pages
  ┃ ┣ 📂Home              # Example of a page folder
  ┃ ┗ 📂...
  ┣ 📂reducers
  ┣ 📂styles
  ┃ ┣ 📜global.ts         # Global styles
  ┃ ┗ 📜theme.ts          # Styles used for theming (like ligh and dark mode)
  ┣ 📂utils
  ┣ 📜application.tsx
  ┗ 📜index.tsx
```

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).