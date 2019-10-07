import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {
        const tasksElements = this.props.tasks.map(t => {
            return <TodoListTask title={t.title} isDone={t.isDone} priority={t.priority}/>
        });

        return (
            <div className="todoList-tasks">
                {/*<TodoListTask title={this.props.tasks[0].title} isDone={this.props.tasks[0].isDone}/>*/}
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

