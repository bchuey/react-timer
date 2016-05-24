var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// load Component you are testing
var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      // assertions
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started'); // countdown status should be updated

      // after 1 sec, the value of `count` should be 9
      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done(); // need this because of asynchronous call
      }, 1001)
    });

    it('should never set count less than zero', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      // assertions
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done(); // need this because of asynchronous call
      }, 3001)
    });

    it('should pause countdown on paused status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3); // set count to 3 and start interval
      countdown.handleStatusChange('paused'); // click of a button

      // check if count is still 3
      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should reset count on stopped', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>); // rendering component
      countdown.handleSetCountdown(3); // set count to 3 and start interval
      countdown.handleStatusChange('stopped'); // click of a button

      // check if count is still 3
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });

  });
});
