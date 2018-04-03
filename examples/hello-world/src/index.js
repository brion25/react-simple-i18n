import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-simple-i18n'

import MyComponent from './my-component'
import { messages } from './messages'
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider messages={messages} initial="es">
    <MyComponent />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
