import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

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

const About = () => {
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

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  // const mlStats = [
  //   'Supervised & Unsupervised Learning Algorithms', 'Natural Language Processing', "Bayesian Inference", "Cloud Computing", "Deep Learning (RNN, LSTM, Attention Based Models, and Autoencoders)", "Topic Modelling (LDA/LSA/NMF)", "Regression Analysis"
  // ];
  // const programming = [
  //   'Python', 'R', 'SQL', 'Stata', 'Java'
  // ]
  // const dataVis=[
  //   "Tableau", "Plotly", "Seaborn", "Matplotlib", "ggplot"
  // ]
  // const pythonPackages=[
  //   'Pandas', 'Pyspark', 'Numpy', 'Scikit-learn', 'TS Fresh', 'spaCy', 'PyTorch', 'Keras'
  // ]
  // const tools = [
  //   'commandLine', 'Databricks', 'Jupyter Notebookds', 'Git', 'LaTeX', 'Markdown'
  // ]
  // const business = [
  //   'A/B Testing', "Markowitz Portfolio Theory", "Econometrics", "Pricing Strategy", "Accounting", "Valuations", "Market Psychology", "Options Trading", "Project Management", "Presentations"
  // ]

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      {/* <h2 className="numbered-heading">About Me</h2> */}
      <div className="inner">
        <StyledText>
          <div>
            <p>
              I am a data scientist for my own life - I use data to make better decisions for myself
              and others, more often. I often view life as a game of optimization - and there is an
              immense amount of data around us just waiting for me to visualize it and apply the
              wide toolkit of data science techniques that I have under my belt to extract useful
              signals. There’s a story to unravel behind every dataset.
              <br></br>I am a very curious person who believes in the compounding nature of learning
              - and I am always striving to use my data literacy as a powerful asset in many fields,
              such as finance, statistics, grocery chain management, customer service, and music.
              <br></br>I graduate this semester from the University of Rochester with a BS in Data
              Science and a minor in Business. Outside of data science, some of my hobbies include
              playing the piano/guitar, producing music, table tennis, and chess
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
  );
};

export default About;
