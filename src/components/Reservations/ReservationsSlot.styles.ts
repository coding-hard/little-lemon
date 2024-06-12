import styled from 'styled-components';

export const SlotContainer = styled.div`
  margin-top: 2rem;
`;

export const SlotTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

export const SlotList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  padding: 0;
`;

export const SlotItem = styled.div`
  background-color: #ff6347;
  color: #fff;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4500;
  }
`;
