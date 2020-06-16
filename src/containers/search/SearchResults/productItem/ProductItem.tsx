import React, { Component, Fragment } from 'react'
import './ProductItem.scss'
import { Modal, Button } from 'react-bootstrap'

interface Props {
    products: any
}
interface State {
    show: boolean
    item: any
}

class ProductItem extends Component<Props, State> {

    state: State = {
        show: false,
        item: null
    }

    handlerModalDisplay = () => { };

    renderModelComponent = () => { }

    triggerModal = () => {
        this.setState(prevState => ({ show: !prevState.show }))
    }

    handleCloseModel = () => this.setState((prevState) => ({ show: !prevState.show }));

    controlText = (limit: number, text: string) => text.slice(0, limit);

    mapPropProducts = (products: Array<Object>) => products.map((product: any, i) => (
        <div className="media" key={i} onClick={() => this.triggerModal()}>
            <div className="fav-box">
                {/* <i className="fa fa-heart-o" aria-hidden="true"></i> */}
            </div>
            <img className="d-flex align-self-start"
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?h=350&auto=compress&cs=tinysrgb"
                alt="Generic placeholder" />
            <div className="media-body pl-3">
                <div className="price">$799,000</div>
                <div className="stats">
                    <span><i className="fa fa-arrows-alt"></i><small>New York</small>1678 Sq ft</span>
                    <span><i className="fa fa-bath"></i>2 Beadrooms</span>
                </div>
                <div className="address">4062 Walnut Hill Drive
                                Cincinnati</div>
            </div>
        </div>
    ))

    render() {
        return (
            <Fragment>
                { this.mapPropProducts(this.props.products) }
                <Modal show={ this.state.show } onHide={ this.handleCloseModel }>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body></Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="danger"
                            className="btn--delete">
                            Book a Tour</Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}

export default ProductItem
