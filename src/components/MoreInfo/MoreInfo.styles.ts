import styled from 'styled-components';

export const MoreInfoSection = styled.section`
  grid-area: more-info;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoContent = styled.div`
  grid-column: span 1;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const InfoTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const InfoParagraph = styled.p`
  font-size: 1rem;
  color: #777;
  margin: 0.5rem 0;
`;

export const InfoImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const InfoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;
