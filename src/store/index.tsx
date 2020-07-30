import { combineReducers, createStore } from 'redux';
import SeamlessImmutable from 'seamless-immutable';
import tdItems, { reducerName as tdItemsReducer } from './ducks/tdItems';

// reducers
/** Initial reducers in the reducer registry */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultReducers: any = {};

/** Add tdItems reducer to registry */
defaultReducers[tdItemsReducer] = tdItems;

/** Create reducers from default reducers obj */
const reducers = combineReducers(defaultReducers);

// store
/** The initial store */
const store = createStore(
  reducers,
  SeamlessImmutable({}),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
