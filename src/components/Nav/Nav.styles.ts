import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: bisque;
  padding: 1rem 2rem;
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 21px;
  cursor: pointer;
  transition: transform 0.3s ease;

  div {
    width: 100%;
    height: 3px;
    background-color: #fff; /* White color for good contrast */
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  &:hover {
    transform: scale(1.05);
  }
`;

export const NavLink = styled.a`
  color: black;
  background-color: bisque;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition:
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    color: #ff6347; /* Tomato color on hover */
  }

  &[as='button'] {
    background: bisque;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: inherit;
    text-decoration: none;
    transition:
      color 0.3s ease,
      transform 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: #ff6347; /* Tomato color on hover */
    }
  }
`;

export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1rem;
  padding: 1rem;
  margin: 0;
  background-color: #333; /* Dark background for good contrast */
  position: absolute;
  top: 60px; /* Adjust based on header height */
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
  color: #fff; /* White text for good contrast */
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: block;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: #ff6347; /* Tomato color on hover */
    color: #fff; /* White text on hover */
  }

  &[as='button'] {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      background-color: #ff6347; /* Tomato color on hover */
      color: #fff; /* White text on hover */
    }
  }
`;
