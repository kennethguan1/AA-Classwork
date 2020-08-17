import React from 'react'; 
import TodosApp from './todos_app'; 
import {Provider} from 'react-redux'; 

const Root = (props) => (
    <Provider store={props.store}>
        <TodosApp />
    </Provider>
);


export default Root; 