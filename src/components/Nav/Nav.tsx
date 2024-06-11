import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
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
  const { isAuthenticated, logout } = useAuth();

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
          <NavLink as={Link} to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/menu">
            Menu
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/reservations">
            Reservations
          </NavLink>
        </NavItem>
        {isAuthenticated ? (
          <NavItem>
            <NavLink as="button" onClick={logout}>
              Logout
            </NavLink>
          </NavItem>
        ) : (
          <NavItem>
            <NavLink as={Link} to="/login">
              Login
            </NavLink>
          </NavItem>
        )}
      </NavList>
      {isOpen && (
        <MobileNavList>
          <MobileNavItem>
            <MobileNavLink as={Link} to="/">
              Home
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink as={Link} to="/about">
              About
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink as={Link} to="/menu">
              Menu
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink as={Link} to="/reservations">
              Reservations
            </MobileNavLink>
          </MobileNavItem>
          {isAuthenticated ? (
            <MobileNavItem>
              <MobileNavLink as="button" onClick={logout}>
                Logout
              </MobileNavLink>
            </MobileNavItem>
          ) : (
            <MobileNavItem>
              <MobileNavLink as={Link} to="/login">
                Login
              </MobileNavLink>
            </MobileNavItem>
          )}
        </MobileNavList>
      )}
    </NavContainer>
  );
};

export default Nav;
