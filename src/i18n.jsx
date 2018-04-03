import React from 'react';
import { I18nContext } from './provider.jsx';

export function i18n (Component) {
  const I18nConsumer = I18nContext.Consumer;

  return class extends React.Component {
    render() {
      return (
        <I18nConsumer>
          {(context) => {
            const {
              messages
            } = context;

            return (
              <Component {...this.props} messages={messages} />
            )
          }}
        </I18nConsumer>
      )
    }
  }
}
