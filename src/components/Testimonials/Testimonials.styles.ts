import styled from 'styled-components';

export const TestimonialsSection = styled.section`
  grid-area: testimonials;
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
`;

export const TestimonialsTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialItem = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
`;

export const TestimonialText = styled.p`
  font-size: 1rem;
  color: #777;
  margin: 0.5rem 0;
`;
