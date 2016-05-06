import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import todoApp from './reducer';
import Todo from './components/presentation/Todo';
import TodoList from './components/presentation/TodoList';
import AddTodo from './components/presentation/AddTodo';
import FilterLink from './components/presentation/FilterLink';
import Footer from './components/presentation/Footer';

const store = createStore(todoApp);

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

let nextTodoId = 0;
const TodoApp = ({ todos, visibilityFilter }) => (
  <div>
    <AddTodo onAddClick={text => store.dispatch({ type: 'ADD_TODO', id: nextTodoId++, text })} />
    <TodoList todos={getVisibleTodos(todos, visibilityFilter)} onTodoClick={id => store.dispatch({ type: 'TOGGLE_TODO', id })} />
    <Footer visibilityFilter={visibilityFilter} onFilterClick={filter => store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter })} />
  </div>
);

const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos} visibilityFilter={store.getState().visibilityFilter} />,
    document.getElementById('main-app')
  );
};

store.subscribe(render);
render();
