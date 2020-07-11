import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// react select
import Select from 'react-select'

import { Row, Col, Card, CardBody } from 'reactstrap';


//  image
const productImg2 = require('../../assets/img/product/product2.jpg')
const productImg3 = require('../../assets/img/product/product3.jpg')
const productImg4 = require('../../assets/img/product/product4.jpg')

// core components
import GridContainer from "../../components/Grid/GridContainer"

import * as styles from '../../assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle'

const useStyles = makeStyles(styles);

export default () => {

  const [ products, setProducts ] = useState([
    { id: 1, image: productImg4, name: "Kacyiru 2 bedroom", link: "#", rating: 5, oldPrice: 500, newPrice: 450, isOffer: true, offer: "Rent" },
    { id: 2, image: productImg2, name: "Kacyiru 2 bedroom", link: "#", rating: 4, oldPrice: 240, newPrice: 225, isOffer: false, offer: "Sale" },
    { id: 3, image: productImg3, name: "Kacyiru 2 bedroom", link: "#", rating: 4, oldPrice: 175, newPrice: 152, isOffer: true, offer: "Rent" },
    { id: 4, image: productImg4, name: "Kacyiru 2 bedroom", link: "#", rating: 4, oldPrice: 150, newPrice: 145, isOffer: false, offer: 0 },
    { id: 5, image: productImg2, name: "Kacyiru 2 bedroom", link: "#", rating: 4, oldPrice: 145, newPrice: 138, isOffer: true, offer: "Sale" },
    { id: 6, image: productImg3, name: "Kacyiru 2 bedroom", link: "#", rating: 4, oldPrice: 138, newPrice: 135, isOffer: true, offer: "Sale" },
  ])


  const classes: any = useStyles();
  return (
    <div className={ classes.section } style={ { marginTop: "-6rem" } }>
      <div className={ classes.container }>
        <div id="navigation-pills">
          <GridContainer>
            <div style={ { zIndex: 1000, background: "#f9f9f9", padding: "1rem", borderRadius: ".3rem" } }>
              <Row className="mb-2 filters">
                {/* <div className="filters"> */}
                  <Col xl="4" sm="6" xs="9" className="select-location">
                  <Select
                    placeholder="choose a prefered location" />
                  </Col>
                  <Col xl="8" sm="6" xs="3" className="map-btn-div">
                    <div className="text-sm-right">
                    <button className="map-btn">Map</button>
                    </div>
                  </Col>
                {/* </div> */}
              </Row>

              {/* map products */ }

              <Row>
                {
                  products.map((product, key) =>
                    <Col xl="4" sm="6" key={ "_col_" + key }>
                      <Card>
                        <CardBody>
                          <div className="product-img position-relative">
                            {
                              product.isOffer
                                ? <div className="avatar-sm product-ribbon">
                                  <span className="avatar-title rounded-circle  bg-primary">
                                    { product.offer }
                                  </span>
                                </div>
                                : null
                            }

                            <img src={ product.image } alt="" className="img-fluid mx-auto d-block" />
                          </div>
                          <div className="mt-4 text-center">
                            <h5 className="mb-3 text-truncate">
                              { product.name }</h5>
                            <div className="text-muted mb-3">
                              {/* <StarRatings
                              rating={ product.rating }
                              starRatedColor="#F1B44C"
                              starEmptyColor="#2D363F"
                              numberOfStars={ 5 }
                              name='rating'
                              starDimension="14px"
                              starSpacing="3px"
                            /> */}
                            </div>
                            <h5 className="my-0"><span className="text-muted mr-2"><del>${ product.oldPrice }</del></span> <b>${ product.newPrice }</b></h5>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  )
                }
              </Row>

              <br />
              <p>
                Dramatically visualize customer directed convergence
                without revolutionary ROI. Collaboratively
                administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after
                installed base benefits.
                        </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence
                without revolutionary ROI. Collaboratively
                administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after
                installed base benefits.
                        </p>
              <p>
                Collaboratively administrate empowered markets via
                plug-and-play networks. Dynamically procrastinate B2C
                users after installed base benefits.
                        </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence
                without revolutionary ROI. Collaboratively
                administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after
                installed base benefits.
                        </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence
                without revolutionary ROI. Collaboratively
                administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after
                installed base benefits.
                        </p>
              <p>
                Collaboratively administrate empowered markets via
                plug-and-play networks. Dynamically procrastinate B2C
                users after installed base benefits.
                        </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence
                without revolutionary ROI. Collaboratively
                administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after
                installed base benefits.
                        </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence
                without revolutionary ROI. Collaboratively
                administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after
                installed base benefits.
                        </p>
            </div>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
