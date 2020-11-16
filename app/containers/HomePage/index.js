/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import Jumbotron from './Jumbotron';

export default function HomePage() {
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="Roby Saavedra" content="Product designer" />
      </Helmet>
      <Jumbotron />
    </article>
  );
}
