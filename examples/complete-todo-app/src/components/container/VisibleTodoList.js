import React from 'react';
import { connect } from 'react-redux';

import TodoList from '../presentation/TodoList';

const togleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

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

// Map Redux Store state to the props of the todolist component that are related
// to the data from the Redux store.
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

// Maps dispatch method the store to the callback props of the todolist component
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => { dispatch(toggleTodo(id)); }
  };
};

// Connect above methods to a presentational component, describing context types
// that pass the store from the provider to the components.
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
