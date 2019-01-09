import React, { Component } from 'react';
import '../styles/singleTask.css';
import QuickMenu from './quickMenu';
import { CSSTransitionGroup } from 'react-transition-group'

export default class SingleTask extends Component {
  state={};
  constructor(){
    super();
    this.state={
      focused:false,
      popupVisible:false,
      showQuickMenu:false,
      quickMenu:''
    }
  }
  componentWillUnmount(){
    console.log('')
  }
  classes = ()=>{
    const {focused} = this.state;
    if(focused){
      return({backgroundColor: '#009688', color:'#fff'})
    }
    else return({backgroundColor: 'transparent', color:'#000'})
  }
  focuseThis = ()=>{
    this.setState({focused: true});
  }
  unFocuseThis = ()=>{
    this.setState({focused: false});
  }
  showQuickMenu=()=>{
    this.setState({showQuickMenu: true, quickMenu:'quickMenuShow'});
  }
  hideQuickMenu=()=>{
    this.setState({showQuickMenu: false, quickMenu:''});
  }

  handleClick=()=> {
    if (!this.state.popupVisible) {
      this.focuseThis();
      this.showQuickMenu();
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      this.unFocuseThis();
      this.hideQuickMenu();
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      popupVisible: !prevState.popupVisible,
    }));
  }

  handleOutsideClick=(e)=> {
    // // ignore clicks on the component itself
    //   if (e.target!=null && this.node.contains(e.target)) {
    //     return;
    //   }
    this.handleClick();
  }
  quickMenu= ()=>{
    const {deleteTask, id} = this.props;
    const {quickMenu} = this.state
    if(this.state.showQuickMenu){
      return (
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={true}
          transitionLeave={true}>

          <QuickMenu
          quickMenu={quickMenu}
          id={id}
          deleteTask={deleteTask}>
          </QuickMenu>

        </CSSTransitionGroup>
      )
    }
  }



  render() {
    const {task} = this.props;
    return (
      <React.Fragment>
        <div ref={node => { this.node = node; }}>
          <div onClick={this.handleClick} style={this.classes()} className={`singleTask`}>
            {task}
          </div>
        {this.quickMenu()}
        </div>
      </React.Fragment>
    )
  }
}
