import React from 'react';
import Slider from 'react-slick';
import {
  TestimonialsSection,
  TestimonialsTitle,
  TestimonialItem,
  TestimonialRating,
  TestimonialName,
  TestimonialReview,
} from './Testimonials.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    rating: 5,
    name: 'John Doe',
    review:
      'Amazing food and great service! Highly recommend the Greek Salad and Lemon Dessert.',
  },
  {
    rating: 4.5,
    name: 'Jane Smith',
    review: 'The atmosphere was wonderful, and the Bruschetta was to die for!',
  },
  {
    rating: 5,
    name: 'Mike Johnson',
    review:
      'One of the best dining experiences I`ve ever had. The staff was very friendly.',
  },
  {
    rating: 4.5,
    name: 'Emily Davis',
    review: 'Delicious food and cozy environment. Will definitely come back!',
  },
  {
    rating: 5,
    name: 'Sarah Brown',
    review:
      'Fantastic experience! The service was excellent and the food was delicious.',
  },
  {
    rating: 4.5,
    name: 'Chris Wilson',
    review:
      'Great place to dine. The food is exceptional and the ambiance is perfect.',
  },
  {
    rating: 5,
    name: 'Laura Green',
    review: 'Absolutely loved it! The Lemon Dessert is a must-try.',
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <TestimonialsSection>
      <TestimonialsTitle>Testimonials</TestimonialsTitle>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialItem
            key={index}
            aria-label={`Testimonial from ${testimonial.name}`}
          >
            <TestimonialRating>
              {'★'.repeat(Math.floor(testimonial.rating))}{' '}
              {testimonial.rating % 1 ? '☆' : ''}
            </TestimonialRating>
            <TestimonialName>{testimonial.name}</TestimonialName>
            <TestimonialReview>{testimonial.review}</TestimonialReview>
          </TestimonialItem>
        ))}
      </Slider>
    </TestimonialsSection>
  );
};

export default Testimonials;
