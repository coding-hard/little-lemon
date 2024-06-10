import React from 'react';
import '../styles/Main.css';

export default function Main() {
  return (
    <main className="main-container">
      {/* Hero section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src="path-to-hero-image.jpg" alt="Delicious food" />
        </div>
      </section>
      {/* Specials */}
      <section className="specials">
        <div className="specials-header">
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
        <div className="specials-grid">
          <div className="special-item">
            <img src="path-to-special-image1.jpg" alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <span>$12.99</span>
            <button>Order a delivery</button>
          </div>
          <div className="special-item">
            <img src="path-to-special-image2.jpg" alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <span>$5.99</span>
            <button>Order a delivery</button>
          </div>
          <div className="special-item">
            <img src="path-to-special-image3.jpg" alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <span>$5.00</span>
            <button>Order a delivery</button>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <p>Rating</p>
            <p>Name</p>
            <p>Review text</p>
          </div>
          <div className="testimonial-item">
            <p>Rating</p>
            <p>Name</p>
            <p>Review text</p>
          </div>
          <div className="testimonial-item">
            <p>Rating</p>
            <p>Name</p>
            <p>Review text</p>
          </div>
          <div className="testimonial-item">
            <p>Rating</p>
            <p>Name</p>
            <p>Review text</p>
          </div>
        </div>
      </section>
      {/* More information */}
      <section className="more-info">
        <div className="info-content">
          <h2>Little Lemon</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="info-images">
          <img src="path-to-info-image1.jpg" alt="Info 1" />
          <img src="path-to-info-image2.jpg" alt="Info 2" />
        </div>
      </section>
    </main>
  );
}
