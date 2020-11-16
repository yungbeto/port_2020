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

export default function Jumbotron() {
  return (
    <JumboWrapper>
      <One>
        Hello I&apos;m Roby - I&apos;m currently a senior product designer at
        Revel where I make software that helps people get around.
      </One>
      <Two>
        Before that I made software for students and teachers at Flocabulary.
      </Two>
      <Three>
        Prior to that I did a lot more stuff which you can conveniently find in
        my CV if you&apos;re interested.
      </Three>
    </JumboWrapper>
  );
}
