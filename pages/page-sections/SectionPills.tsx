import React from "react";
import classnames from 'classnames'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Nouislider from "nouislider-react";
// import StarRatings from 'react-star-ratings';
import {
  Container, Row, Col, Card, CardBody, CardTitle,
  Form, Label, Input, Nav, NavItem, NavLink, Pagination,
  PaginationItem, PaginationLink
} from 'reactstrap';

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import NavPills from "../../components/NavPills/NavPills";
// import Breadcrumbs from '../../components/Common/Breadcrumb'

import * as styles from '../../assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle'
import Link from "next/link";

const useStyles = makeStyles(styles);

export default function SectionPills() {

  const FilterClothes = [
    { id: 1, name: "T-shirts", link: "#" },
    { id: 2, name: "Shirts", link: "#" },
    { id: 3, name: "Jeans", link: "#" },
    { id: 4, name: "Jackets", link: "#" },
  ]
  const Products = [
    { id: 1, image: "product1", name: "Half sleeve T-shirt", link: "#", rating: 5, oldPrice: 500, newPrice: 450, isOffer: true, offer: -25 },
    { id: 2, image: "product2", name: "Light blue T-shirt", link: "#", rating: 4, oldPrice: 240, newPrice: 225, isOffer: false, offer: 0 },
    { id: 3, image: "product3", name: "Black Color T-shirt", link: "#", rating: 4, oldPrice: 175, newPrice: 152, isOffer: true, offer: -20 },
    { id: 4, image: "product4", name: "Hoodie (Blue)", link: "#", rating: 4, oldPrice: 150, newPrice: 145, isOffer: false, offer: 0 },
    { id: 5, image: "product5", name: "Half sleeve T-Shirt", link: "#", rating: 4, oldPrice: 145, newPrice: 138, isOffer: true, offer: -22 },
    { id: 6, image: "product6", name: "Green color T-shirt", link: "#", rating: 4, oldPrice: 138, newPrice: 135, isOffer: true, offer: -28 },
  ]


  const classes: any = useStyles();
  return (
    <div className={ classes.section } style={ { padding: ".1px 0" } }>
      <div className={ classes.container }>
        <div id="navigation-pills">
          <div className={ classes.title }>
            <h3>Navigation Pills</h3>
          </div>
          <GridContainer>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
