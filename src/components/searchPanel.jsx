import React, { Component } from 'react'
import '../styles/searchPanel.css';
export default class SearchPanel extends Component {
  state={
    inputValue:'',
  }

  updateInput = (event)=>{
    this.setState({inputValue : event.target.value})
  }
  clearInput= () =>{
    this.setState({inputValue : ''});


  }
  handleOnClick = () =>{
    this.submitTask();
  }
  handleOnEnter=(e)=>{
    if(e.keyCode == 13){
      this.submitTask();
   }
  }
  submitTask=()=>{
    this.props.addTask(this.state.inputValue);
    this.clearInput();
  }
  render() {
    const {inputValue} = this.state;
    return (
      <div className="searchPanelView">
        <input onKeyDown={this.handleOnEnter} value={inputValue} onChange={this.updateInput} type="text" placeholder="Utwórz notatke"/>
        <div className="buttonsView">
          <button onClick={this.handleOnClick}><i className='material-icons'>add</i></button>
        </div>
      </div>
    )
  }
}
