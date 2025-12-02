import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  CTAButtons,
  Button
} from '../styles/Header.styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (location.pathname === '/support') {
      return;
    }
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleCustomerCareClick = () => {
    navigate('/support');
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
          </svg>
          {process.env.REACT_APP_BRAND_NAME || 'Payverix'}
        </Logo>
        <NavLinks>
          <NavLink href="#features" onClick={(e) => handleNavClick(e, '#features')}>Features</NavLink>
          <NavLink href="#stats" onClick={(e) => handleNavClick(e, '#stats')}>Industry Stats</NavLink>
          <NavLink href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>How It Works</NavLink>
          <NavLink href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</NavLink>
          <NavLink href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</NavLink>
        </NavLinks>
        <CTAButtons>
          <Button onClick={handleCustomerCareClick}>Customer Care</Button>
          <Button $primary onClick={handleButtonClick}>Get Started</Button>
        </CTAButtons>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
