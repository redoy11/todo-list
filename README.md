# Todo List

This is a small project (limited in terms of  features). Mostly, it can be regarded as an **example** on how I setup my usual apps and how I like to use the redux store.

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Example
**Live demo** can be found [here](https://redoy11.github.io/todo-list/).

### Small Things to note

* [Material-UI](https://material-ui.com/) is used (though I override some styles using raw `CSS`). I prefer overriding with raw `CSS` than using the recommended `jsx styles`.
* [Redux](https://redux.js.org/) and [React-Redux](https://react-redux.js.org/) with some form of Ducks pattern is followed.
* Drag and Drop list is implemented using [react-sortable-tree](https://github.com/frontend-collective/react-sortable-tree)


## Setup

First, clone the repository using `git`.

```
git clone https://github.com/redoy11/todo-list.git
```
Move to the project directory.

```
cd [path/project-directory/]
```

Install dependencies using `yarn` (or `npm` if you prefer).

```
yarn # or npm install
```


## Commands

>Commands need to be run from the project directory.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn lint`

Fixes `eslint` issues that can be automatically fixed. 

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn eject`

For details, see [cra-eject-command](https://create-react-app.dev/docs/available-scripts).

### `yarn test` **(outdated)**

Unit Tests with updated components not added yet. 

### `yarn-deploy`

Deploys a production build of app to `gh-pages`.

## Acknowledgement

Special thanks to all the people who have contributed to develop the dependencies, libraries, tools, etc that have used in this repo.


