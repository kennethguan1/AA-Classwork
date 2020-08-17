import React from 'react'; 
import {uniqueId} from '../../util/util'; 

class TodoForm extends React.Component {
    constructor () {
        super (); 

        this.state = {
            id: uniqueId(),
            title: '', 
            body: '', 
            done: false
        }; 

        this.updateTitle = this.updateTitle.bind(this); 
        this.updateBody = this.updateBody.bind(this); 
        this.updateDone = this.updateDone.bind(this); 
        this.handeSubmit = this.handleSubmit.bind(this); 
    }

    updateTitle() {
        this.setState({ title: event.target.value }); 
    }

    updateBody() {
        this.setState({ body: event.target.value});
    }

    updateDone() {
        this.setState({ done: event.target.value })
    }

    handleSubmit(e) { 
        debugger;
        e.preventDefault(); 
        this.props.receiveTodo(this.state); 
        this.setState({
            id: uniqueId(), 
            title: '', 
            body: '', 
            done: false 
        });
    }

    render () {
        return (
            <div>
                <h4>Todo Form</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Title: 
                        <input type="text" value={this.state.title} onChange={this.updateTitle}/>
                    </label>
                    <label>Body: 
                        <input type="text" value={this.state.body} onChange={this.updateBody}/>
                    </label>
                    <label>Completed? 
                        <label>Done: 
                            <input type="radio" value="True" onChange={this.updateDone}/>
                        </label>
                        <label>Not Done: 
                            <input type="radio" value="false" onChange={this.updateDone}/>
                        </label>
                    </label>
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default TodoForm; 