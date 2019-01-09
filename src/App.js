import React, { Component } from 'react';
import SearchPanel from './components/searchPanel';
import Tasks from './components/tasks';
import './App.css';

class App extends Component {
  state= {};
  constructor(){
    super();
    this.state = {
      tasks:[]
    };

  }
  addTaskToList = (task)=>{
    if(task!==''){
      let tasks = [... this.state.tasks];
      tasks.push(task);
      this.setState({
        tasks: tasks
      });
    }
    else{
      alert('Podaj wartość')
    }
  }

  deleteTask = (id)=>{
    let tasks = [...this.state.tasks];
    let newTasks =[];
    tasks.map((name, index)=>{
      if(index!==id){
        newTasks.push(name);
      }
    });
    this.setState({tasks:newTasks})
  }

  render() {
    const {tasks} = this.state;
    return (
      <div>
        <SearchPanel
        addTask={this.addTaskToList}>
        </SearchPanel>

        <Tasks
        tasks={tasks}
        deleteTask={this.deleteTask}
        ></Tasks>
      </div>
    );
  }
}

export default App;
