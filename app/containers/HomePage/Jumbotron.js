import React from 'react';
import styled from 'styled-components';

const JumboWrapper = styled.section`
  text-align: left;
  padding: 24px;
  height: calc(100vh - 56px);
  max-width: 96%;
`;

const One = styled.h1`
  font-size: 64px;
  line-height: 88px;
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

const Two = styled.h2`
  color: rgb(255, 252, 235, 0.8);
  font-size: 48px;
  line-height: 56px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const Three = styled.h3`
  color: rgb(255, 252, 235, 0.6);
  font-size: 24px;
  line-height: 32px;
  font-weight: normal;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const CvLink = styled.a`
  @keyframes hvr-buzz {
    50% {
      transform: translateX(1px) rotate(1.5deg);
    }
    100% {
      transform: translateX(-2px) rotate(-1deg);
    }
  }
  display: inline-block;
  animation-name: hvr-buzz;
  animation-duration: 0.15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  color: #df00cc;
  text-decoration: none;
`;

const Revel = styled.a`
  display: inline-block;
  color: #00b9f2;
  text-decoration: none;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: transform;
  transform-origin: 0 100%;
  &:visited {
    color: #00b9f2;
  }
  &:hover {
    color: #0089bf;
    transform: skew(-23deg);
  }
`;

const Flocab = styled.a`
  @keyframes hvr-bob {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-16px);
    }
  }
  display: inline-block;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  color: #ffbf22;
  text-decoration: none;
  &:visited {
    color: #ffbf22;
  }
  &:hover {
    color: #ff8614;
    animation-name: hvr-bob-float, hvr-bob;
    animation-duration: 0.3s, 1.5s;
    animation-delay: 0.05s, 0.3;
    animation-timing-function: ease-out, ease-in-out;
    animation-iteration-count: 1, infinite;
    animation-fill-mode: forwards;
    animation-direction: normal, alternate;
  }
`;

export default function Jumbotron() {
  return (
    <JumboWrapper>
      <One>
        Hello I&apos;m Roby - I&apos;m currently a senior product designer
        at&nbsp;
        <Revel href="https://gorevel.com/" target="_blank">
          Revel
        </Revel>{' '}
        where I make software that helps people get around.
      </One>
      <Two>
        Before that I made software for students and teachers at&nbsp;{' '}
        <Flocab
          href="https://www.flocabulary.com/tools/branding"
          target="_blank"
        >
          Flocabulary
        </Flocab>
        .
      </Two>
      <Three>
        Prior to that I did a lot more stuff which you can conveniently find
        in&nbsp;
        <CvLink href="https://lookatmycurriculumvitae.com/" target="_blank">
          my CV
        </CvLink>
        &nbsp;if you&apos;re interested.
      </Three>
    </JumboWrapper>
  );
}
