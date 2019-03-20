import React from 'react';
import styled from 'styled-components';
import Logo from '../img/github.svg';

const About = () => {
  return (
    <AboutWrapper>
      <h1>About PromoFinder</h1>
      <p>
        Help your friends save some money by sharing the best promotions you can find on the
        internet.
      </p>
      <p>
        PromoFinder was developed with the intention of helping people share their findings with the
        world.
      </p>
      <a href="https://github.com/emwp" target="_blank" rel="noopener noreferrer">
        <img src={Logo} alt="GitHub" />
      </a>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 40rem;
  max-width: 90%;
  border-radius: 0.4rem;
  margin: 6rem auto auto auto;

  h1 {
    color: white;
    text-align: center;
    margin: 0 0 0.5rem 0;
  }
  p {
    color: white;
    text-align: justify;
    margin: 0.5rem 0;
  }

  a {
    text-align: center;
    cursor: auto;
    margin-top: 2rem;
  }

  img {
    width: 2rem;
    cursor: pointer;
  }
`;
