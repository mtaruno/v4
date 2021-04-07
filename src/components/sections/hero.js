import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Matthew Taruno</h2>;
  const three = <h3 className="big-heading">I am passionate about data.</h3>;
  // const four = (
  //   <p>
  //    I am a data scientist for my own life - I use data to make better decisions for myself and others, more often. I often view life as a game of optimization - and there is an immense amount of data around us just waiting for me to visualize it and apply the wide toolkit of data science techniques that I have under my belt to extract useful signals. There’s a story to unravel behind every dataset.
  //   <br></br>
  //   I am a very curious person who believes in the compounding nature of learning - and I am always striving to use my data literacy as a powerful asset in many fields, such as finance, statistics, grocery chain management, customer service, and music.
  //   <br></br>
  //   I graduate this semester from the University of Rochester with a BS in Data Science and a minor in Business. Outside of data science, some of my hobbies include playing the piano/guitar, producing music, table tennis, and chess

  //   </p>
  // );
  // const five = (
  //   <a href={`mailto:${email}`} className="email-link">
  //     Get In Touch
  //   </a>
  // );

  // const six = <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />;

  const items = [one, two, three];

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
      <StyledAboutSection id="about" ref={revealContainer}>
        {/* <h2 className="numbered-heading">About Me</h2> */}
        <div className="inner">
          <StyledText>
            <div>
              <p>
                I am a data scientist for my own life - I use data to make better decisions for
                myself and others, more often. I often view life as a game of optimization - and
                there is an immense amount of data around us just waiting for me to visualize it and
                apply the wide toolkit of data science techniques that I have under my belt to
                extract useful signals. There’s a story to unravel behind every dataset.
                <br></br>I am a very curious person who believes in the compounding nature of
                learning - and I am always striving to use my data literacy as a powerful asset in
                many fields, such as finance, statistics, grocery chain management, customer
                service, and music.
                <br></br>I graduate this semester from the University of Rochester with a BS in Data
                Science and a minor in Business. Outside of data science, some of my hobbies include
                playing the piano/guitar, producing music, table tennis, and chess.
              </p>
            </div>
          </StyledText>

          <StyledPic>
            <div className="wrapper">
              <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
            </div>
          </StyledPic>
        </div>
      </StyledAboutSection>
    </StyledHeroSection>
  );
};

export default Hero;
