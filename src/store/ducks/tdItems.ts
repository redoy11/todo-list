import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';

/** interface for flexible object */
interface FlexObj {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/** The reducer name */
export const reducerName = 'tdItems';

// actions
/** action types */
export const SET_ITEMS = 'todo/reducer/tdItems/SET_ITEMS';

/** interface for SET_ITEMS action */
export interface SetItemsAction extends AnyAction {
  items: FlexObj[];
  type: typeof SET_ITEMS;
}

/** Create type for reducer actions */
export type ListTableActionTypes = SetItemsAction | AnyAction;

// action creators

/** set items action creator
 * @param {string} FlexObj[] - items to be set
 * @returns {SetItemsAction} - an action to set items in store
 */
export const setItems = (items: FlexObj[]): SetItemsAction => ({
  items,
  type: SET_ITEMS,
});

// the reducer

/** interface for tdItems state in redux store */
interface tdItemsState {
  items: FlexObj[];
}

/** Create an immutable tdItems state */
export type ImmutableListTableState = SeamlessImmutable.ImmutableObject<tdItemsState>;

/** initial tdItems state */
const initialState: ImmutableListTableState = SeamlessImmutable({
  items: [],
});

/** the tdItems reducer function */
export default function reducer(
  state: ImmutableListTableState = initialState,
  action: ListTableActionTypes,
): ImmutableListTableState {
  switch (action.type) {
    case SET_ITEMS:
      return SeamlessImmutable({
        items: action.items,
      });
    default:
      return state;
  }
}

// selectors

/** returns the items
 * @param {Partial<Store>} state - the redux store
 * @return { FlexObj[] } - the existing items
 */
export function getTdItems(state: Partial<Store>): FlexObj[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (state as any)[reducerName].items;
}
