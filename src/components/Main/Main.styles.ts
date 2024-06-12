import styled from 'styled-components';

export const MainContainer = styled.main`
  display: grid;
  grid-template-areas:
    'hero'
    'specials'
    'testimonials'
    'more-info';
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-areas:
      'hero'
      'specials'
      'testimonials'
      'more-info';
  }
`;
