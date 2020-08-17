import React from 'react';
import TodoForm from './todo_form';
import ToDoListItem from './todo_list_item';

class TodoList extends React.Component {
    render(){
        return(
        <div>
            <h1>This is the To Do List</h1>
                <ul>
                    {this.props.todos.map((todo) => {
                        return <ToDoListItem todo={todo} /> 
                    })}
                </ul>
            <TodoForm receiveTodo={this.props.recieveTodo}/>
        </div>
        )
    }
}

export default TodoList; 


