import React from "react";
// import classnames from 'classnames'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import Nouislider from "nouislider-react";
// import StarRatings from 'react-star-ratings';
// import {
//   Container, Row, Col, Card, CardBody, CardTitle,
//   Form, Label, Input, Nav, NavItem, NavLink, Pagination,
//   PaginationItem, PaginationLink
// } from 'reactstrap';

// @material-ui/icons
// import Dashboard from "@material-ui/icons/Dashboard";
// import Schedule from "@material-ui/icons/Schedule";
// import List from "@material-ui/icons/List";

// core components
import GridContainer from "../../components/Grid/GridContainer";
// import GridItem from "../../components/Grid/GridItem";
// import NavPills from "../../components/NavPills/NavPills";
// import Breadcrumbs from '../../components/Common/Breadcrumb'

import * as styles from '../../assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle'
// import Link from "next/link";

const useStyles = makeStyles(styles);

export default function SectionPills() {

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
