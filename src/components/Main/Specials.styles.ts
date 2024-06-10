import styled from 'styled-components';

export const SpecialsSection = styled.section`
  grid-area: specials;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
`;

export const SpecialsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const SpecialsTitle = styled.h2`
  font-size: 2rem;
  color: #333;
`;

export const SpecialsButton = styled.button`
  padding: 0.5rem 2rem;
  font-size: 1rem;
  background-color: #ffd700;
  color: #333;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const SpecialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SpecialItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

export const SpecialImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const SpecialTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

export const SpecialDescription = styled.p`
  font-size: 1rem;
  color: #777;
`;

export const SpecialPrice = styled.span`
  font-size: 1.25rem;
  color: #333;
  font-weight: bold;
`;

export const SpecialOrderButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
