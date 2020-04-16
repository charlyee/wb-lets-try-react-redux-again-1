import { InventoryState, REMOVE_ITEM_FROM_INVENTORY, ADD_ITEM_TO_INVENTORY, InventoryActionTypes } from './types';

// Set up a default or "initial" state for our app.
const initialState: InventoryState = {
  items: [
    {
      id: 1,
      name: 'Socks'
    },
    {
      id: 2,
      name: 'Pants'
    },
    {
      id: 3,
      name: 'Shoes'
    }
  ]
}

// Now to set up our reducer / functionality!
export function inventoryReducer ( state = initialState, action: InventoryActionTypes ) {
  switch ( action.type ) {
    case REMOVE_ITEM_FROM_INVENTORY:
      return {
        ...state,
        // Filter through, and return the array WITHOUT the matching ID.
        items: state.items.filter( item => item.id !== action.payload )
      }
    case ADD_ITEM_TO_INVENTORY:
      return {
        ...state,
        // Add one new item onto the end of our array!
        items: [ ...state.items, action.payload ]
      }
    default:
      return state;
  }
}
