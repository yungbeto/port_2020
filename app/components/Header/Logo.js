import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  font-size: 16px;
  line-height: 64px;
  margin: auto 0px;
  color: #fffceb;
  text-decoration: none;

  &:visited,
  &:active {
    color: #fffceb;
  }
  &:hover {
    color: #fbf1a9;
  }
`;
