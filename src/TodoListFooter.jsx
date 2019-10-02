import React from 'react';
import './App.css';

class TodoListFooter extends React.Component {
    render = () => {
        const classForAll = this.props.filterValue === 'All'
            ? 'filter-active': '';
        const classForComleted = this.props.filterValue === 'Comleted'
            ? 'filter-active': '';
        const classForActive = this.props.filterValue === 'Active'
            ? 'filter-active': '';

        return (
            <div className="todoList-footer">
                <button className= {classForAll}>All</button>
                <button className={classForComleted}>Completed</button>
                <button className={classForActive}>Active</button>
            </div>
        );
    }
}

export default TodoListFooter;

