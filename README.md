## Redux-Samples
A series of examples that demonstrate how to use Redux. Later examples implement React applciations that use Redux to manage data.

### Resources
Dan Abramov's excellent course on Redux, [available for free](https://egghead.io/series/getting-started-with-redux).

### Introduction
If you would like to modify any of the existing code examples, each example directory includes a webpack config file that can be used to quickly get up and running. You'll need to `npm install` the requisite packages (see `package.json`) and run the `webpack` command after installing webpack globally on your computer (`npm install webpack -g`). This will allow you to build each example as you make changes to it, producing a new bundle in the respective `build/` directory. Each project has `index.js` as its root.

The general structure of a React-Redux application is as follows:
```
src
  | actions
  | reducers
  | containers
  | components
  index.js
  configureStore.js
```

The `actions` and `reducers` folders contain all of the associated actions and reducers required of an application. Typically, I store all of my actions in one file and spread out different reducers across multiple files, combining them using `combineReducers()`. `containers` are for container elements that supply data to React components. `components` are stateless React components, typically represented in a stateless functional model.

It is good practice to keep your store configuration in a separate file (`configureStore.js`) in case you later want to add middleware to your application.

### Additional Libraries
#### `deep-freeze` and `expect`
`deep-freeze` and `expect` are used to provide tests for the reducers and enforce an immutable environment. `expect` provides improved assertion testing with a very simple syntax: `expect(foo(before)).toEqual(after);`. `deep-freeze` is used to 'freeze' an object and prevent any mutations from taking place. This is extremely useful to ensure that the objects of the application do not mutate the state in the reducer, as Redux has a strict intolerance towards mutations.

### Projects
Ranked in order of complexity.

Each project contains its own Webpack configuration file to make it easy to modify individual examples.

#### counter
The simplest application of the lot, demonstrating how to compose a simple reducer and handle a centralized store. This application only makes use of the `redux` library.

#### counter-react
The counter example expanded to incorporate the React front-end library with additional UI functionality.

#### preventMutations
Not a project per se, but rather a resource that shows how to avoid mutating objects and arrays in JavaScript. Since Redux does not work properly with mutations, useful methods like `Object.assign()` and `Array.concat()` are used to avoid mutating the state of an application, particularly in reducers.

#### simple-todo-app
A todo-list application that doesn't use the `react-redux` library, instead making use of bloated components that access a global store. Demonstrates why the `react-redux` library is useful, as including a `Provider` component to handle state transitions between components is very useful for reducing the complexity of individual components. This project contains a number of tests for the reducer than can be carried over to the more complete application, but were omitted due to redundancy. For an application that is more similar to production uses, see the `complete-todo-app`.

#### complete-todo-app
A todo-list application that includes all of the necessary components for building large projects with React + Redux. Utilizes `react-redux` library for the `Provider` component that passes the Redux store implicitly to all components. This is made possible with the `connect()` method from the same library, connecting a container's state and dispatch methods with a presentational component.

This project demonstrates the structure for an entire React/Redux project (albeit, a simple one). Additional refactoring can be done to separate the actions from the other components.
