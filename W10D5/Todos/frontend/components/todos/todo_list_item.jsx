import React from 'react'; 

export default ({todo}) => {
    return (
        <li key={todo.id}>
            <div>Title: {todo.title}</div>
            <div>Body: {todo.body}</div>
            <div>Done: {todo.done.toString()}</div>
        </li>
    )
}