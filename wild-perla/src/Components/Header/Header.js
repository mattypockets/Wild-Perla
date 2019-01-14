import React from "react";
import { Navbar, NavbarBrand, NavbarItem, Icon, NavbarMenu, NavbarEnd, NavbarBurger } from 'bloomer';
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

        <NavbarBrand>
            <NavbarItem>
                <Icon className='fas fa-chevron-left'/> <strong> MG </strong> <Icon className='fas fa-chevron-right' />
            </NavbarItem>

            {/* Burger Nav menu on mobile */}
            <NavbarBurger isActive={this.state.isActive} onClick={this.clicky} />
            
        </NavbarBrand>

        <NavbarMenu isActive={this.state.isActive} onClick={this.clicky} className="mobileMenu">
   
            <NavbarItem className="mobileItem">About</NavbarItem>
            <NavbarItem className="mobileItem">Shop</NavbarItem>
            <NavbarItem className="mobileItem">Contact</NavbarItem>

        </NavbarMenu>   

            {/* Facebook/Instagram links */}
            <NavbarEnd>
                <NavbarItem href="https://www.facebook.com/wildperla/" target="_blank" isHidden='touch'>
                    <Icon className='fab fa-facebook f' />
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