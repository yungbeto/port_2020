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
  color: rgb(255, 252, 235, 0.5);
  font-size: 24px;
  line-height: 32px;
  font-weight: normal;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const CvLink = styled.a`
  color: #df00cc;
  text-decoration: none;
`;

const Revel = styled.a`
  color: #00b9f2;
  text-decoration: none;
  &:visited {
    color: #00b9f2;
  }
  &:hover {
    color: #0089bf;
  }
`;

const Flocab = styled.a`
  color: #ffbf22;
  text-decoration: none;
  &:visited {
    color: #ffbf22;
  }
  &:hover {
    color: #ff8614;
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
