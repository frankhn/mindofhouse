import { Dispatch } from 'redux';
import axios from '../../../helpers/config/axios'
import * as actionTypes from './types';

const startSearch = () => ({
    type: actionTypes.START_SEARCH
})

const searchDispatch = (payload:any) => ({
    type: actionTypes.SEARCH_RESULTS,
    payload
})

const errorSearching = (payload:any) => ({
    type: actionTypes.ERROR_SEARCHING,
    payload
})

export const searchAction = (query:string) => async (dispatch:Dispatch) => {
    try {
        dispatch(startSearch())
        const { data } = await axios.get(`/products/search/?q=${query}`)
        return dispatch(searchDispatch(data.data))
    } catch (error) {
        return dispatch(errorSearching(error.response))
    }
}
