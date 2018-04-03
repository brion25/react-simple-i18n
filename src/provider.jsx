import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';

export const I18nContext = React.createContext({});

export class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLng: ''
    };
  }

  componentDidMount() {
    this.setState({
      selectedLng: this.props.initial
    });
  }

  render() {
    const {
      messages,
    } = this.props;

    const {
      selectedLng
    } = this.state;

    const context = {
      messages: _get(messages, selectedLng, {})
    };

    return (
      <I18nContext.Provider value={context}>
        {React.Children.only(this.props.children)}
      </I18nContext.Provider>
    )
  }
}

Provider.propTypes = {
  messages: PropTypes.object.isRequired,
  initial: PropTypes.string
}
