'use strict';

// action types
export const ADD_ITEM = 'ADD_ITEM';
export const CHECK_UNCHECK_ITEM = 'CHECK_UNCHECK_ITEM';
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';

// action creator to add item to the inverntory
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: {
    name: item.name
  }
});

// action creator to check an item in the inverntory
export const checkItem = (name) => ({
  type: CHECK_UNCHECK_ITEM,
  payload: {
    name
  }
});

// action creator to increment count for an item
export const incrementCount = () => ({
  type: INCREMENT_COUNT
});

// action creator to decrement count for an item
export const decrementCount = () => ({
  type: DECREMENT_COUNT
});
