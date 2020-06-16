import React from "react";
import { Link } from "react-router-dom";
import './AppNavbar.scss'

export interface IAppNavbarProps {};

const AppNavbar: React.FC<IAppNavbarProps> = (props) => {
    return (
        <nav className="app-nav">
        <div className="app--top-menu">
            {/* <div className="customer-support">
                <div>help & contacts</div>
                <div>customer protections</div>
                <div>terms</div>
            </div>
            <div className="customer-cookies">
                <div>my orders</div>
                <div></div>
                <div>cart</div>
            </div> */}
        </div>
        <div className="app--tool-bar">
            <div className="app--brand"><Link to="/">MindOfHouse</Link></div>
            <div className="menu__">
            <div className="brand"><Link to="/">Home</Link></div>
            <div className="brand"><Link to="/">About</Link></div>
            <div className="brand"><Link to="/">Contact</Link></div>
        </div>
        </div>
    </nav>
    );
}

export default AppNavbar;