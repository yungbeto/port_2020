/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  cv: {
    id: `${scope}.cv`,
    defaultMessage: 'L👀k at my CV ⇢',
  },
  work: {
    id: `${scope}.work`,
    defaultMessage: 'Work',
  },
  logo: {
    id: `${scope}.logo`,
    defaultMessage: 'Roby Saavedra',
  },
});
