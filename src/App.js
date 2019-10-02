import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';


class App extends React.Component {
    tasks = [
        {title: 'JS', isDone: true, priority: 'hi'},
        {title: 'HTML', isDone: false, priority: 'hi'},
        {title: 'CSS', isDone: false, priority: 'low'},
        {title: 'React', isDone: false, priority: 'low'},

    ];
    filterValue = 'Active';
    render = () => {
        return (
            <div className="App">
                < div className="todoList">
                    < TodoListHeader/>
                    < TodoListTasks tasks={this.tasks}/>
                    < TodoListFooter filterValue={this.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

