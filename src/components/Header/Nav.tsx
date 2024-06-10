import React, { useState, useEffect, useRef } from 'react';
import {
  NavContainer,
  HamburgerMenu,
  NavList,
  NavItem,
  NavLink,
  MobileNavList,
  MobileNavItem,
  MobileNavLink,
} from './Nav.styles';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <NavContainer ref={menuRef}>
      <HamburgerMenu onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </HamburgerMenu>
      <NavList>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Menu</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Reservations</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Order Online</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Login</NavLink>
        </NavItem>
      </NavList>
      {isOpen && (
        <MobileNavList>
          <MobileNavItem>
            <MobileNavLink href="#">Home</MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink href="#">About</MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink href="#">Menu</MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink href="#">Reservations</MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink href="#">Order Online</MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink href="#">Login</MobileNavLink>
          </MobileNavItem>
        </MobileNavList>
      )}
    </NavContainer>
  );
};

export default Nav;
