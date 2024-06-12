import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterList,
  FooterItem,
  FooterLink,
  FooterText,
  FooterIcon,
} from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Doormat Navigation</FooterTitle>
          <FooterList>
            <FooterItem>
              <FooterLink href="/" aria-label="Navigate to Home">
                Home
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink href="/about" aria-label="Navigate to About">
                About
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink href="/menu" aria-label="Navigate to Menu">
                Menu
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink
                href="/reservations"
                aria-label="Navigate to Reservations"
              >
                Reservations
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink href="/login" aria-label="Navigate to Login">
                Login
              </FooterLink>
            </FooterItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText aria-label="Restaurant Address">
            <FooterLink
              href="https://www.google.com/maps/search/?api=1&query=1234+Lemon+Street,+Chicago,+IL+60601"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open address in Google Maps"
            >
              1234 Lemon Street, Chicago, IL 60601
            </FooterLink>
          </FooterText>
          <FooterText aria-label="Phone Number">
            Phone: (123) 456-7890
          </FooterText>
          <FooterText aria-label="Email Address">
            Email: info@littlelemon.com
          </FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Social Media Links</FooterTitle>
          <FooterList>
            <FooterItem>
              <FooterLink
                href="https://www.facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterIcon className="fab fa-facebook-f" aria-hidden="true" />{' '}
                Facebook
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink
                href="https://www.twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterIcon className="fab fa-twitter" aria-hidden="true" />{' '}
                Twitter
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink
                href="https://www.instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterIcon className="fab fa-instagram" aria-hidden="true" />{' '}
                Instagram
              </FooterLink>
            </FooterItem>
          </FooterList>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default React.memo(Footer);
