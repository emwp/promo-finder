import React from 'react';
import styled from 'styled-components';
import GitHub from '../../img/github.svg';
import LinkedIn from '../../img/in.svg';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Connect with me</p>
      <div className="social_links">
        <a href="https://github.com/emwp" target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/everton-pereira-1588a1105/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  margin-top: 3rem;
  color: white;

  p {
    text-align: center;
  }

  .social_links {
    margin: 1rem auto;
    display: flex;
    justify-content: center;
  }

  .social_links a {
    cursor: auto;
    margin: 0 1rem;
  }

  .social_links img {
    width: 2rem;
    cursor: pointer;
  }

  .social_links img:hover,
  .social_links img:active {
    filter: invert(1);
    transition: 0.3s;
  }
`;
