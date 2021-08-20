import React from 'react';
import './App.css';

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25
    }
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleBreakDecrement () {
    if(this.state.breakLength !== 0){
    this.setState({
      breakLength: this.state.breakLength - 1
    })
  }
  }

  handleSessionDecrement () {
    if(this.state.sessionLength !== 0){
      this.setState({
        sessionLength: this.state.sessionLength - 1
      })
    }
  }

  handleBreakIncrement () {
      this.setState({
        breakLength: this.state.breakLength + 1
      })
  }

  handleSessionIncrement () {
    this.setState({
      sessionLength: this.state.sessionLength + 1
    })
  }

  handleReset () {
    this.setState ({
      breakLength: 5,
      sessionLength: 25
    })
  }



  render() {
  return (
    <div className="App">
     <div id="main-title"> 25 + 5 Clock</div>
     <div className="for-flex">
        <div className="length-control">
          <div id="break-label">Break Length</div>
              <div className="container">
                <button className="icon" id="break-decrement" onClick={this.handleBreakDecrement}><i className="fa fa-arrow-down"></i></button>
                <div className="break-length">{this.state.breakLength}</div>
                <button className="icon" id="break-increment" onClick={this.handleBreakIncrement}><i className="fa fa-arrow-up"></i></button>
              </div>
        </div>
        <div className="length-control">
          <div id="session-label">Session Length</div>
              <div  className="container">
                <button className="icon" id="session-decrement" onClick={this.handleSessionDecrement}><i className="fa fa-arrow-down"></i></button>
                <div className="session-length">{this.state.sessionLength}</div>
                <button className="icon" id="session-increment" onClick={this.handleSessionIncrement}><i className="fa fa-arrow-up"></i></button>
              </div>            
        </div>
     </div>


     <div id="timer">
       <div id="timer-wrapper">
         <div id="timer-label">Session</div>
         <div id="time-left">{this.state.sessionLength}:00</div>
       </div>
     </div>

     <div id="timer-control">
       <button id="start_stop"  className="icon"><i className="fa fa-play"></i><i className="fa fa-pause"></i></button>
       <button id="reset" onClick={this.handleReset} className="icon" style={{fontSize: '1em'}}><i className="fa fa-retweet"></i></button>
     </div>

     <div className="author">
       Designed and Coded by <br/>
       <a href="https://github.com/diptirani16/" target="_blank">Dipti Rani</a>
     </div>
    </div>
  )};
}

export default App;
