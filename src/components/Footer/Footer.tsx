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
} from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Doormat Navigation</FooterTitle>
          <FooterList>
            <FooterItem>
              <FooterLink href="#">Home</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink href="#">About</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink href="#">Menu</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink href="#">Reservations</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink href="#">Order Online</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink href="#">Login</FooterLink>
            </FooterItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>Address</FooterText>
          <FooterText>Phone number</FooterText>
          <FooterText>Email</FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Social Media Links</FooterTitle>
          <FooterText>Address</FooterText>
          <FooterText>Phone number</FooterText>
          <FooterText>Email</FooterText>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
