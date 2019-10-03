import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {
        const tasksElements = this.props.tasks.map(t => <TodoListTask
            title={t.title}
            isDone={t.isDone}
            priority={t.priority}
        />);
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

