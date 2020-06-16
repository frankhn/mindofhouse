import React, { Component } from 'react'
import './Nav_bar.scss'
import { Link } from 'react-router-dom'
import Image from '../../assets/house3.jpg'
import HomeSearch from '../../containers/search/home/HomeSearch'
import SideDrawer from '../elements/sideDrawer/SideDrawer'
import DrawerToggle from '../elements/sideDrawer/DrawerToggle/DrawerToggle'

interface INavBarProps { }

export interface INavBarState {
    showSideDrawer: boolean
}

class navBar extends Component<INavBarProps, INavBarState> {

    state: INavBarState = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    sideDrawerToggleHandle = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <nav className="nav">
                <SideDrawer open={ this.state.showSideDrawer } closed={ this.sideDrawerClosedHandler } />
                {/* <div className="tool-bar"> */ }
                <div className="toolbar">
                    <DrawerToggle clicked={ this.sideDrawerToggleHandle } />
                    <span className="brand"><Link to="/">MindOfHouse</Link></span>
                    <div className="menu__">
                        <div className="brand"><Link to="/">Home</Link></div>
                        <div className="brand"><Link to="/">About</Link></div>
                        <div className="brand"><Link to="/">Contact</Link></div>
                    </div>
                </div>
                <img className="bg-slider" src={ Image } alt="name" />
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Outdoors</span>
                        <span className="heading-primary--sub">is where life happens</span>
                    </h1>

                    {/* <a href="#" className="btn btn--white btn--animated">Discover out tours</a> */ }
                </div>
                <HomeSearch />
            </nav>
        )
    }
}

export default navBar;
