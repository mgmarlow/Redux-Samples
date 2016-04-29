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
`deep-freeze` and `expect` are used to provide tests for the reducers and enforce an immutable environment. `expect` provides improved assertion-testing with a very simple syntax: `expect(foo(before)).toEqual(after);`. `deep-freeze` is used to 'freeze' an object and prevent any mutations from taking place. This is extremely useful to ensure that the objects of the application do not mutate the state in the reducer, as Redux has a strict intolerance towards mutations.

### Table of Contents
`todo`
