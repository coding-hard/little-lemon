import styled from 'styled-components';

export const MenuContainer = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const MenuTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const OrderSection = styled.div`
  margin-top: 2rem;

  &:focus {
    outline: 3px solid #333;
  }
`;
