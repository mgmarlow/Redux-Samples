import expect from 'expect';
import deepFreeze from 'deep-freeze';

const toggleTodo = (todo) => {
  // Note: Object.assign requires polyfill
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

testToggleTodo();
