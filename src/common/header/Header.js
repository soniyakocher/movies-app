import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import './Header.css'
import logo from '../../assets/logo.svg';



class Header extends Component {
    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt='logo' />
                    <div className="login-btn">
                        <Button variant="contained" color="default" >Login</Button>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header
