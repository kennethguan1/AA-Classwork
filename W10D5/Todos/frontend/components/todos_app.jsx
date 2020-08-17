import React from 'react'; 
import TodoListContainer from './todos/todo_list_container'

const TodosApp = (props) => {
    return (
        <div>
            <h1>This is our App!</h1>
            <TodoListContainer /> 
        </div>
        );
};

export default TodosApp; 