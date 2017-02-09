'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {
  addItem,
  incrementCount,
  decrementCount
} from './../actions/inventory.actions';

export class ListControls extends Component {
  constructor() {
    super();
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.handleDecrementClick = this.handleDecrementClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      showInput: false
    };
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.checkedItemsCount !== 0) {
      this.setState({
        showInput: false
      });
    }
  }
  
  componentDidUpdate() {
    // focus the input field id present
    if (this.refs.name) {
      this.refs.name.focus();
    }
  }
  
  // handles input field key press
  handleKeyPress(e) {
    // unicode character for Enter / Return is 13
    if (e.which === 13) {
      // TODO add validations for the input
      this.addItem(e.target.value);
      this.resetInputField(e.target);
      this.setState({
        showInput: false
      });
    }
  }
  
  // adds an item to the inventory
  addItem(name) {
    this.props.dispatch(addItem({
      name
    }));
  }
  
  // resets the input field's value
  resetInputField(field) {
    field.value = '';
  }
  
  // handles decrement (-) click
  handleDecrementClick() {
    this.props.dispatch(decrementCount());
  }
  
  // handles increment (+) click
  handleIncrementClick() {
    if (this.props.checkedItemsCount === 0) {
      // no items are checked, show the input field
      this.setState({
        showInput: true
      });
    } else {
      // tere are checked items, increase the amount instead of showing the input field
      this.props.dispatch(incrementCount());
    }
  }
  
  // returns JSX for the input field
  renderInputField() {
    if (!this.state.showInput) {
      return null;
    }
    
    return (
      <input
        type="text"
        ref="name"
        onKeyPress={this.handleKeyPress}
        placeholder="Enter item name and press 'Return'"
      />
    );
  }
  
  render() {
    const isDecrementDisabled = this.props.checkedItemsCount === 0;
    
    return (
      <div>
        <small>
          {this.props.checkedItemsCount} / {this.props.totalItemsCount} items selected
        </small>
        <div className="buttons-wrapper">
          <button onClick={this.handleDecrementClick} disabled={isDecrementDisabled}>-</button>
          <button onClick={this.handleIncrementClick}>+</button>
          {this.renderInputField()}
        </div>
      </div>
    );
  }
}

ListControls.propTypes = {
  checkedItemsCount: PropTypes.number.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(ListControls);
