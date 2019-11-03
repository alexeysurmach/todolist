import React from 'react';
import './App.css';

class TodoListHeader extends React.Component {
    state = {
        error: false,
        title: ''
    };

    onTitleChanged = (e) => {
        this.setState({title: e.currentTarget.value})
    }
    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            {
                this.onAddTaskClick()
            }
        }


    }
    onAddTaskClick = () => {
        let newTitle = this.state.title;

        if (newTitle !== '') {
            this.props.AddTask(newTitle);
            this.setState({error: false, title: ''})
        } else {
            this.setState({error: true})
        }

    };


    render = () => {
        const inputClassName = this.state.error === true ? 'error' : '';
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input className={inputClassName}
                           value={this.state.title}
                           type="text" placeholder="New task name"
                           onKeyPress={this.onKeyPress}
                           onChangeCapture={this.onTitleChanged}
                    />
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        )
    }
};
export default TodoListHeader;

