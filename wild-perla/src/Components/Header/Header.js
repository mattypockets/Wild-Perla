import React from "react";
import { Navbar, NavbarBrand, NavbarItem, Icon, Image, NavbarMenu, NavbarEnd, NavbarBurger } from 'bloomer';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component  {

     state = {
        isActive: false
     }

    // Toggle hamburger when clicked
    clicky = () => {
        if (this.state.isActive) {
        this.setState({isActive: false});
        } 
        else this.setState({isActive: true})
    }


    render() {
    return (

    <Navbar>

        <div className="navWrapper">
        <NavbarBrand>
            <NavbarItem isHidden="touch">
                <Link to='/'><Image src="/images/WP_logo.png" /></Link>
            </NavbarItem>

            <NavbarItem isHidden="desktop">
                <Link to='/'><Image src="/images/WP_logo_small.png" /></Link>
            </NavbarItem>

            {/* Burger Nav menu on mobile */}
            <NavbarBurger isActive={this.state.isActive} onClick={this.clicky} />
            
        </NavbarBrand>

        <NavbarMenu isActive={this.state.isActive} onClick={this.clicky} className="mobileMenu">

            <NavbarItem className="mobileItem"><Link to='/about/'>About</Link></NavbarItem>
            <NavbarItem className="mobileItem"><Link to='/store/'>Store</Link></NavbarItem>
            <NavbarItem className="mobileItem"><Link to='/contact/'>Contact</Link></NavbarItem>

        </NavbarMenu>   
        </div>
            {/* Facebook/Instagram links */}
            <NavbarEnd>
                <NavbarItem href="https://www.facebook.com/wildperla/" target="_blank" isHidden='touch'>
                    <Icon className='fab fa-facebook-f navIcon' />
                </NavbarItem>
                <NavbarItem href="http://instagram.com/wildperla" target="_blank" isHidden='touch'>
                    <Icon className='fab fa-instagram' />
                </NavbarItem>
            </NavbarEnd>
        
    </Navbar>
    )
    }
}

export default Header;