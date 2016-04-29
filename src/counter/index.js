import { createStore } from 'redux';

import { counter } from './reducer';

const store = createStore(counter);

// Initial state = 0
const render = () => {
  document.getElementById('main-app').innerText = store.getState();
}

// Subscribe rendre function to store to catch updates
store.subscribe(render);
render(); // render once to render initial state

// Dispatch to change application state
document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});
