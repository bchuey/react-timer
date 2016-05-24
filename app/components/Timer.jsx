var React = require('react');
var Clock = require('Clock'); // load `Clock` component
var Controls = require('Controls'); // load `Controls` component

var Timer = React.createClass({
  // define initial state
  getInitialState: function () {
    return {
      count: 0, // initial value of count always starts at 0
      timerStatus: 'stopped', // timer starts in `stopped` state
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    // check if new timer status is different than the old one
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.handleStart();
          break;
        case 'stopped':
          // stop timer
          // and set count to equal 0
          this.setState({count:0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
  },
  handleStart: function() {
    // just start the interval
    // and add +1 to count
    this.timer = setInterval(() => {
        this.setState({
          count: this.state.count + 1
        })
    }, 1000);
  },
  handleStatusChange: function (newTimerStatus) {
    // change the timer status
    this.setState({timerStatus: newTimerStatus});

  },
  render: function() {
    var {count, timerStatus} = this.state; // use es6 destructuring to pull off `this.state` object
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }

});

module.exports = Timer;
