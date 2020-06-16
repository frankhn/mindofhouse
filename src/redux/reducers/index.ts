import { combineReducers } from 'redux';
import { authentication, verification, upload, newProduct } from '../../containers/account/store/reducer'
import { search } from '../../containers/search/store/reducer'

const rootReducer = combineReducers({
    authentication,
    search,
    verification,
    upload,
    newProduct
});

export default rootReducer;
