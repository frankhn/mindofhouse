import * as actionTypes from './types';
import updateObject from '../../../helpers/utils/UpdateObject';


interface Action {
  type: string
  payload: any
}

const initialState = {}


const startSearch = (state:any) => updateObject(state, {
  loading: true
});
const searchResult = (state:any, payload:any) => updateObject(state, {
  loading: false,
  products: { ...payload }
})
const errorSearching = (state:any, payload:any) => updateObject(state, {
  loading: false,
  error: { ...payload }
})

/**
 *
 * @param state initial state
 * @param action action type
 */
export const search = (state = initialState, action:Action) => {
  switch (action.type) {
    case actionTypes.START_SEARCH: return startSearch(state)
    case actionTypes.SEARCH_RESULTS: return searchResult(state, action.payload)
    case actionTypes.ERROR_SEARCHING: return errorSearching(state, action.payload)
    default:
      return state;
  }
};

