var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {

  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    // spy test
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    // manipulate the values
    countdownForm.refs.seconds.value = '109';

    // simulate `submit`
    TestUtils.Simulate.submit($el.find('form')[0]); // pass in the DOMNode via jQuery

    // assert spy has been called
    expect(spy).toHaveBeenCalledWith(109);
  });

  // Create new test for invalid data
  // use `should not have been called`

});
