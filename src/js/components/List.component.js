'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {addItem} from './../actions/inventory.actions';
import ListItem from './ListItem.component';
import ListControls from './ListControls.component';

export class List extends Component {
  render() {
    const items = Object.keys(this.props.inventory.items).map((item, index) => (
      <ListItem
        key={index}
        checked={this.props.inventory.items[item].checked}
        amount={this.props.inventory.items[item].amount}
        name={item}
      />
    ));
    
    return (
      <div className="list-wrapper">
        <ListControls
          checkedItemsCount={this.props.inventory.checkedItemsCount}
          totalItemsCount={Object.keys(this.props.inventory.items).length}
        />
        <div>
          {items}
        </div>
      </div>
    );
  }
}

List.propTypes = {
  inventory: PropTypes.object.isRequired
};

export default connect((state) => ({
  inventory: state.inventory
}))(List);
