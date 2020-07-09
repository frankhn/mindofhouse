import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// const styles = {
//   grid: {
//     marginRight: "-15px",
//     marginLeft: "-15px",
//     width: "auto"
//   }
// };

// const useStyles = makeStyles(styles);

interface Props {
  children?: any
  className?: any
  style?:any
}

export default function GridContainer(props:Props) {
  // const classes:any = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest}
    className="MuiToolbar-root MuiToolbar-regular makeStyles-container-5 MuiToolbar-gutters">
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: ""
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
