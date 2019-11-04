import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';


class App extends React.Component {



    state = {
        tasks: [
            {id: 1, title: 'JS', isDone: true, priority: 'low'},
            {id: 2, title: 'HTML', isDone: true, priority: 'low'},
            {id: 3, title: 'CSS', isDone: true, priority: 'low'},
            {id: 4, title: 'React', isDone: false, priority: 'low'}
        ],

        filterValue: 'All'
    };
    nextTaskId = 5;


    AddTask = (newTitle) => {

        let newTask = {
            title: newTitle,
            isDone: true,
            priority: 'low',
            id: this.nextTaskId
        };

        this.nextTaskId++;

        let newTAsks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTAsks
        });


    };

    changeFilterValue = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    };

    changeTaskStatus = (task, isDone) => {
        let newTasks = this.state.tasks.map(t => {
            if(t !== task){
                return t;
            } else {
                return {...t, isDone: isDone}
            }
        }) ;
        this.setState({
            tasks: newTasks
        })
    };



    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader AddTask={this.AddTask} />
                    <TodoListTasks  changeTaskStatus={this.changeTaskStatus} tasks={this.state.tasks.filter(t => {
                        if (this.state.filterValue === 'All') {
                            return true;}
                        if (this.state.filterValue === 'Active'){
                            return !t.isDone;}
                        if (this.state.filterValue === 'Completed'){
                            return t.isDone;
                        }}
                    )}/>
                    <TodoListFooter filterValue={this.state.filterValue} onChangeFilter={this.changeFilterValue}/>
                </div>
            </div>
        );
    }

}

export default App;
