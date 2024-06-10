import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  box-sizing: border-box;
  position: relative;
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 11; /* Ensures the hamburger menu button is always on top */

  div {
    width: 100%;
    height: 3px;
    background-color: #000;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1rem;
  padding: 1rem;
  margin: 0;
  background-color: #333;
  position: absolute;
  top: 40px; /* Position the menu below the hamburger button */
  right: 0;
  left: 0;
  z-index: 10;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MobileNavItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const MobileNavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: block;

  &:hover {
    background-color: #444;
  }
`;
