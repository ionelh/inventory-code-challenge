'use strict';

import {combineReducers} from 'redux';
import inventory from './inventory.reducer';

// We only have one reducer right now, but the app might grow
const combinedReducers = combineReducers({
  inventory
});

export default combinedReducers;
