'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {
  addItem,
  checkItem
} from './../actions/inventory.actions';

export class ListItem extends Component {
  constructor() {
    super();
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }
  
  handleCheckboxChange(e) {
    this.props.dispatch(checkItem(e.target.value));
  }
  
  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.props.checked}
            value={this.props.name}
            onChange={this.handleCheckboxChange}
          />
          {this.props.name} ({this.props.amount})
        </label>
      </div>
    );
  }
}

ListItem.propTypes = {
  checked: PropTypes.bool.isRequired,
  amount: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default connect()(ListItem);
