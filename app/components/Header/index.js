import React from 'react';
import { FormattedMessage } from 'react-intl';
// import styled from 'styled-components';

import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';

import messages from './messages';
import Logo from './Logo';

// const CvLink = styled.a`
//   display: inline-flex;
//   padding: 0.5em 1em;
//   margin: 0.5em 0.5em 0.5em 0;
//   border-radius: 0.5em;
//   text-decoration: none;
//   -webkit-font-smoothing: antialiased;
//   -webkit-touch-callout: none;
//   user-select: none;
//   cursor: pointer;
//   outline: 0;
//   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
//   font-size: 16px;
//   line-height: 24px;
//   color: #ff41b4;

//   &:active {
//     background: #41addd;
//     color: #fff;
//   }

//   &:hover,
//   &:active,
//   &:focus {
//     background: rgba(255, 65, 180, 0.1);
//     color: #fffceb;
//   }
// `;

function Header() {
  return (
    <div>
      <NavBar>
        <Logo to="/">
          <FormattedMessage {...messages.logo} />
        </Logo>
        {/* TODO - MAKE PORTFOLIO SECTION */}
        {/* <div>
          <HeaderLink to="/work">
            <FormattedMessage {...messages.work} />
          </HeaderLink>
          <CvLink href="https://lookatmycurriculumvitae.com/" target="_blank">
            <FormattedMessage {...messages.cv} />
          </CvLink>
        </div> */}
      </NavBar>
    </div>
  );
}

export default Header;
