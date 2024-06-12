import React, { useState, useEffect, useRef, useCallback } from 'react';
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

  const toggleMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
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

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <NavContainer ref={menuRef}>
      <HamburgerMenu
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <div />
        <div />
        <div />
      </HamburgerMenu>
      <NavList>
        <NavItem>
          <NavLink as={Link} to="/" aria-label="Home">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/about" aria-label="About">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/menu" aria-label="Menu">
            Menu
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/reservations" aria-label="Reservations">
            Reservations
          </NavLink>
        </NavItem>
        {isAuthenticated ? (
          <NavItem>
            <NavLink as="button" onClick={logout} aria-label="Logout">
              Logout
            </NavLink>
          </NavItem>
        ) : (
          <NavItem>
            <NavLink as={Link} to="/login" aria-label="Login">
              Login
            </NavLink>
          </NavItem>
        )}
      </NavList>
      {isOpen && (
        <MobileNavList id="mobile-menu">
          <MobileNavItem>
            <MobileNavLink as={Link} to="/" aria-label="Home">
              Home
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink as={Link} to="/about" aria-label="About">
              About
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink as={Link} to="/menu" aria-label="Menu">
              Menu
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink
              as={Link}
              to="/reservations"
              aria-label="Reservations"
            >
              Reservations
            </MobileNavLink>
          </MobileNavItem>
          {isAuthenticated ? (
            <MobileNavItem>
              <MobileNavLink as="button" onClick={logout} aria-label="Logout">
                Logout
              </MobileNavLink>
            </MobileNavItem>
          ) : (
            <MobileNavItem>
              <MobileNavLink as={Link} to="/login" aria-label="Login">
                Login
              </MobileNavLink>
            </MobileNavItem>
          )}
        </MobileNavList>
      )}
    </NavContainer>
  );
};

export default React.memo(Nav);
