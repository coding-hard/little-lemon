import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    align-items: center;
    text-align: center;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

export const FooterTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterIcon = styled.i`
  margin-right: 0.5rem;
`;

export const FooterText = styled.p`
  margin: 0.5rem 0;
`;
