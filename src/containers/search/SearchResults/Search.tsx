import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../redux/store/store'
import ProductItem from './productItem/ProductItem'
import Map from './map/Map'
import './Search.scss'
import SearchFilter from '../filters/search/SearchFilter'

interface Props {

}
interface State {

}

class Search extends Component<Props, State> {
    state = {}

    render() {
        const products = [ 1, 2, 3, 4, 8, 4, , 5 ]
        return (
            // <div className="search__">
                <div className="search-result">
                    <div className="products">
                        <ProductItem products={ products } />
                    </div>
                    <div className="search--map sticky-top">
                        <Map />
                    </div>
                </div>
            // </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({})

export default connect(mapStateToProps, {})(Search)
