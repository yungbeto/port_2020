import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.5em 1em;
  margin: 0.5em 0.5em 0.5em 0;
  border-radius: 0.5em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #ff41b4;

  &:hover,
  &:active,
  &:focus {
    background: rgba(255, 65, 180, 0.1);
    color: #fffceb;
  }
`;
