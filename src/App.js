import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef()
        // setTimeout(
        //     () => {
        //         let newTask = {title: 'Python', isDone: true, priority: 'high'};
        //         let newTasks = [...this.state.tasks, newTask];
        //         this.setState({
        //             tasks: newTasks
        //         })
        //     }, 3000
        // );
    };

    state = {
        tasks: [
            {title: 'JS', isDone: true, priority: 'high'},
            {title: 'HTML', isDone: false, priority: 'high'},
            {title: 'CSS', isDone: false, priority: 'low'},
            {title: 'React', isDone: true, priority: 'high'},
        ],
        filterValue: 'All'

    };

    onAddTaskClick = () => {
        let newTask = {title: this.newTaskTitleRef.current.value, priority: 'high', isDone: false};
        this.newTaskTitleRef.current.value = '';
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        })
    };

    render = () => {
        return (
            <div className="App">
                < div className="todoList">
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input ref={this.newTaskTitleRef = React.createRef()} type="text"
                                   placeholder="New task name"/>
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>
                    {/*< TodoListHeader/>*/}
                    < TodoListTasks tasks={this.state.tasks}/>
                    < TodoListFooter filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

