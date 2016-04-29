import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import { counter } from './reducer';
import Counter from './components/Counter';

const store = createStore(counter);

const AppRender = () => {
  render(
    <Counter
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'
        })
      }
    />,
    document.getElementById('main-app')
  );
};

store.subscribe(AppRender);
AppRender();
