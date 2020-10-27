import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { tabs, logo } from './Constants'

class Header extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="inner">
                    <NavLink to="/" exact activeClassName="none" ><h3 className="masthead-brand" data-testid="logo">{logo}</h3></NavLink>
                    <nav className="nav nav-masthead justify-content-center">
                        {tabs && tabs.map(tab => (
                            <NavLink data-testid={tab.name} key={tab.name} exact to={tab.path} activeClassName="active" className="nav-link" >{tab.name}</NavLink >
                        ))}
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header