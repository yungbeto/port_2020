/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

const Jumbo = styled.h1`
  font-size: 64px;
  line-height: 72px;
`;

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Roby Saavedra - Home</title>
        <meta name="Roby Saavedra" content="Product designer" />
      </Helmet>
      <Jumbo>
        <FormattedMessage {...messages.header} />
      </Jumbo>
      <List>
        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.scaffoldingHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.scaffoldingMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.feedbackHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.feedbackMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.routingHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.routingMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.networkHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.networkMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.intlHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.intlMessage} />
          </p>
        </ListItem>
      </List>
    </div>
  );
}
