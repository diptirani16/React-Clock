import React from 'react';
import './App.css';


class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      start: false,
      isRed: false,
      play:false,
      MinSecs: {minutes: 25, seconds: 0, type: 'SESSION'}
    }
    this.timer = null;
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.CountDownTimer = this.CountDownTimer.bind(this);
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
      this.setState(state => ({
        sessionLength: state.sessionLength - 1,
        MinSecs: { minutes: state.sessionLength - 1, seconds:state.MinSecs.seconds, type: state.MinSecs.type }
      }))
    }
  }

  handleBreakIncrement () {
    if(this.state.breakLength !== 60){
      this.setState({
        breakLength: this.state.breakLength + 1
      })
    }
  }

  handleSessionIncrement () {
    if(this.state.sessionLength !== 60){
    this.setState(state => ({
      sessionLength: state.sessionLength + 1,
      MinSecs: { minutes: state.sessionLength + 1, seconds:state.MinSecs.seconds, type: state.MinSecs.type }
    }))
  }
  }

  handleReset () {
    clearInterval(this.timer);
    this.setState ({
      breakLength: 5,
      sessionLength: 25,
      start: false,
      play: false,
      MinSecs: { minutes: 25, seconds: 0, type: 'SESSION' }
    })
  }


CountDownTimer = (start) => {
  this.setState({ start })
  const audio = document.getElementById('beep');
  if(!start) clearInterval(this.timer)
  else {
    this.timer = setInterval(() => {
      let { minutes, seconds, type } = this.state.MinSecs;
      if(seconds === 0) {
        if(minutes === 0) {
          this.setState({ play: true })
          if(type === 'SESSION') {
            minutes = this.state.breakLength;
            type = 'BREAK'
          } else {
            minutes = this.state.sessionLength;
            type = 'SESSION'
          }
        } else {
          minutes = minutes - 1;
          seconds = 59
        }
      } else {
        seconds = seconds - 1
        this.setState({ play: false })
      }
      if(minutes === 0){
        this.setState({ isRed: true})
      } else this.setState({ isRed: false })    
      
      if(this.state.play === true) audio.play();
      else audio.pause();

      this.setState({ MinSecs: { seconds, minutes, type } })
    }, 1000)

  }
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
         <div id="time-left" style={{ color: this.state.isRed ? '#a50d0d' : 'white'}}>{`${this.state.MinSecs.minutes.toString().padStart(2, '0')}:${this.state.MinSecs.seconds.toString().padStart(2, '0')}`}</div> 
         <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
       </div>
     </div>

     <div id="timer-control">
       <button id="start_stop"  className="icon" onClick={() => this.CountDownTimer(!this.state.start)}><i className="fa fa-play"></i><i className="fa fa-pause"></i></button>
       <button id="reset" onClick={this.handleReset} className="icon" style={{fontSize: '1em'}}><i className="fa fa-retweet"></i></button>
     </div>

     <div className="author">
       Designed and Coded by <br/>
       <a href="https://github.com/diptirani16/" target="_blank" rel="noreferrer">Dipti Rani</a>
     </div>
    </div>
  )};
}

export default App;
