import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import {allTodos} from './reducers/selectors.js';
import TodoListContainer from './components/todos/todo_list_container'; 

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore(); 

    //for testing 
    window.store = store;
    window.receiveTodo = receiveTodo; 
    window.receiveTodos = receiveTodos; 
    window.allTodos = allTodos; 
    //for testing 

    const root = document.getElementById('root'); 
    ReactDOM.render(<Root store={store}/>, root)
})