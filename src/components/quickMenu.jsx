import React, { Component } from 'react'
import '../styles/quicMenu.css'

export default class QuickMenu extends Component {

  handleDelete = ()=>{
    this.props.deleteTask(this.props.id);
  }
  render() {
    const {quickMenu} = this.props;
    return (
      <div className={`quickMenuView ${quickMenu}`}>
        <button className='delete btn' ><i className='material-icons'>clear</i></button>
        <button onClick={this.handleDelete} className='done btn'><i className='material-icons'>done</i></button>
      </div>
    )
  }
}
