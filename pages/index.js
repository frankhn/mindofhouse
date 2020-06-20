import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import PageChange from "components/PageChange/PageChange"
// sections for this page
import SectionPills from "pages-sections/Components-Sections/SectionPills.js";

import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Index(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="MindOfHouse"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/house3.jpg")}>
      <div className={classes.container} style={{ background: "#00000061"}}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title} 
              style={{ fontSize: "2.4rem", color: "#fff"}}>Your Story Starts With Us.</h1>
              <h4 
              style={{ fontSize: "1rem", color: "#fff", fontWeight: "300"}}>
                Every  page needs a small description after the big bold
                title, that{"'"}s why I added this text here. Add here all the
                information that can make houses create the first
                impression.
              </h4>
              <br />
              <Button
              style={{padding: ".5rem 1rem", fontSize: ".8rem"}}
                color="danger"
                size="lg"
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
       </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)} 
      style={{ boxShadow: "none", margin: "-100px 5px 0", borderRadius: "0" }}>
        <SectionPills />
        <PageChange />
        </div>
      <Footer />
    </div>
  );
}

