import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../components/Grid/GridContainer"

import * as styles from '../../assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle'

const useStyles = makeStyles(styles);

export default function SectionPills() {

  const classes: any = useStyles();
  return (
    <div className={ classes.section } style={{ marginTop: "-7rem"}}>
      <div className={ classes.container }>
        <div id="navigation-pills">
          <GridContainer>
            <div style={{ zIndex: 1000, background: "#fff", padding: "1rem", borderRadius: ".3rem"}}>
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
