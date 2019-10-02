import React from 'react';
import './App.css';

class TodoListFooter extends React.Component {
    render = () => {
        const classForAll = this.props.filterValue === 'All' ? 'filter-active': '';
        const classForCompleted = this.props.filterValue === 'Completed' ? 'filter-active': '';
        const classForActive = this.props.filterValue === 'Active' ? 'filter-active': '';

        return (
            <div className="todoList-footer">
                <button className= {classForAll}>All</button>
                <button className={classForCompleted}>Completed</button>
                <button className={classForActive}>Active</button>
            </div>
        );
    }
}

export default TodoListFooter;

