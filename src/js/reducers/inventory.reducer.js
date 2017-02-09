'use strict';

import {
  ADD_ITEM,
  CHECK_UNCHECK_ITEM,
  DECREMENT_COUNT,
  INCREMENT_COUNT
} from './../actions/inventory.actions';

const DEFAULT_STATE = {
  items: {},
  checkedItemsCount: 0
};

const inventory = (state = DEFAULT_STATE, action) => {
  let newState;
  
  switch (action.type) {
    case ADD_ITEM:
      newState = Object.assign({}, state);
      newState.items[action.payload.name] = {
        amount: newState.items[action.payload.name] ? newState.items[action.payload.name].amount + 1 : 1,
        checked: newState.items[action.payload.name] ? newState.items[action.payload.name].checked : false
      };
      return newState;
    
    case INCREMENT_COUNT:
      newState = Object.assign({}, state);
      Object.keys(newState.items).forEach((item) => {
        if (newState.items[item].checked) {
          newState.items[item].amount += 1;
        }
      });
      return newState;
      
    case DECREMENT_COUNT:
      newState = Object.assign({}, state);
      Object.keys(newState.items).forEach((item) => {
        if (newState.items[item].checked) {
          newState.items[item].amount -= 1;
          
          if (newState.items[item].amount === 0) {
            delete newState.items[item];
            newState.checkedItemsCount -= 1;
          }
        }
      });
      return newState;
    
    case CHECK_UNCHECK_ITEM:
      newState = Object.assign({}, state);
      newState.items[action.payload.name].checked = !state.items[action.payload.name].checked;
      newState.checkedItemsCount = newState.items[action.payload.name].checked ? newState.checkedItemsCount + 1 : newState.checkedItemsCount - 1;
      return newState;
    
    default:
      return state;
  }
};

export default inventory;
