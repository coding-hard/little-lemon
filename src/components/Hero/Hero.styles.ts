import styled from 'styled-components';

export const HeroSection = styled.section`
  grid-area: hero;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroText = styled.div`
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

export const HeroSubtitle = styled.h3`
  font-size: 1.5rem;
  color: #666;
`;

export const HeroDescription = styled.p`
  font-size: 1rem;
  color: #777;
  margin: 1rem 0;
`;

export const HeroButton = styled.button`
  padding: 0.5rem 2rem;
  font-size: 1rem;
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 1rem;
`;
