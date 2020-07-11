import React from 'react'
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// import components
import Header from '../components/Header/Header'
import HeaderLinks from '../components/Header/HeaderLinks'
import Parallax from '../components/Parallax/Parallax'
import Footer from '../components/Footer/Footer'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import Button from '../components/CustomButtons/Button'

// page sections
import SectionPills from './page-sections/SectionPills'

// styles
import * as styles from "../assets/jss/nextjs-material-kit/pages/components";


const useStyles = makeStyles(styles);

const IndexPage = (props: any) => {
  const classes: any = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="MindOfHouse"
        rightLinks={ <HeaderLinks /> }
        fixed
        color="transparent"
        changeColorOnScroll={ {
          height: 400,
          color: "white"
        } }
        { ...rest }
      />
      <Parallax image={ require('assets/img/house3.jpg') }>
        <div className={ `makeStyles-container-5 ${ classes.container }` } 
        style={ { background: "#00000061" } }>
          <GridContainer 
          // style={{ padding: "0", marginBottom: "2rem"}}
          >
            <GridItem xs={ 12 } sm={ 12 } md={ 6 }>
              <h1 className={ classes.title }
                style={ { fontSize: "2.3rem", color: "#fff" } }
                >Your Story Starts With Us.</h1>
              <h3
                style={ { fontSize: "1rem", color: "#fff" } }
                >
                Every  page needs a small description after the big bold
                title, that{ "'" }s why I added this text here. Add here all the
                information that can make houses create the first
                impression.
              </h3>
              <br />
              <Button
                style={ { padding: ".5rem 1rem", fontSize: ".8rem" } }
                color="danger"
                size="lg"
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={ classNames(classes.main, classes.mainRaised) } >
        <SectionPills />
      </div>
      <Footer />

    </div>
  )
}

export default IndexPage
