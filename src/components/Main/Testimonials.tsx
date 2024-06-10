import React from 'react';
import {
  TestimonialsSection,
  TestimonialsTitle,
  TestimonialsGrid,
  TestimonialItem,
  TestimonialText,
} from './Testimonials.styles';

const Testimonials: React.FC = () => {
  return (
    <TestimonialsSection>
      <TestimonialsTitle>Testimonials</TestimonialsTitle>
      <TestimonialsGrid>
        <TestimonialItem>
          <TestimonialText>Rating</TestimonialText>
          <TestimonialText>Name</TestimonialText>
          <TestimonialText>Review text</TestimonialText>
        </TestimonialItem>
        <TestimonialItem>
          <TestimonialText>Rating</TestimonialText>
          <TestimonialText>Name</TestimonialText>
          <TestimonialText>Review text</TestimonialText>
        </TestimonialItem>
        <TestimonialItem>
          <TestimonialText>Rating</TestimonialText>
          <TestimonialText>Name</TestimonialText>
          <TestimonialText>Review text</TestimonialText>
        </TestimonialItem>
        <TestimonialItem>
          <TestimonialText>Rating</TestimonialText>
          <TestimonialText>Name</TestimonialText>
          <TestimonialText>Review text</TestimonialText>
        </TestimonialItem>
      </TestimonialsGrid>
    </TestimonialsSection>
  );
};

export default Testimonials;
