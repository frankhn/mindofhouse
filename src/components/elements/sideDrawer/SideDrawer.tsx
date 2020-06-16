import React, { Fragment } from 'react'
import './SideDrawer.css'
import Backdrop from '../Backdrop/backdrop'

const sideDrawer = (props:any) => {
    let attachedClasses = ["SideDrawer", "Closed"]
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"]
    }
    return (
        <Fragment>
        <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            {/* <div className={classes.Logo}>
                <Logo />
            </div> */}
            {/* <nav>
                <NavigationItems />
            </nav> */}
        </div>
        </Fragment>
    )
}

export default sideDrawer