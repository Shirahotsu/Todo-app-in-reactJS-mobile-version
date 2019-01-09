import React, { Component } from 'react';
import SingleTask from './singleTask';
import '../styles/tasks.css';
import { CSSTransitionGroup } from 'react-transition-group'

export default class Tasks extends Component {
  constructor(){
    super();
}
style = () =>{
  return({padding: '69px 0px'})
}

render() {
  const {tasks, deleteTask} = this.props;
  const taskList = ()=>{
    return (
      tasks.map((name, index)=>{
        return(
          <CSSTransitionGroup
          transitionName="tasks"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={true}
          transitionLeave={true}
          key={ index }>
        <SingleTask key={ index } id={ index } task={name} deleteTask={deleteTask}>
        </SingleTask>

        </CSSTransitionGroup>
        );
      })
  )
  }

    return (
      <div style={this.style()}>
        {taskList()}
      </div>
    )
  }
}
