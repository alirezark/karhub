/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from '../../i18n';

export function LanguageProvider(props) {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);
  const { messages, children } = props;

  return (
    <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
      {React.Children.only(children)}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};

export default LanguageProvider;
