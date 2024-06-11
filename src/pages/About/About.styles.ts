import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const AboutParagraph = styled.p`
  font-size: 1rem;
  color: #777;
  margin: 0.5rem 0;
  max-width: 800px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
