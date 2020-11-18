/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  footermessage: {
    id: `${scope}.footer.message`,
    defaultMessage:
      '🥴 Sorry for the mess -- this site is currently under construction 🚧',
  },
});
