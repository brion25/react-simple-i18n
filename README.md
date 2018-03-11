# React simple i18n

Small library to handle i18n using the [Provider Pattern](https://medium.com/@bloodyowl/the-provider-and-higher-order-component-patterns-with-react-d16ab2d1636)

### Basic usage

```js
// messages.js
export const messages = {
  es: {
    message: 'Hola Mundo!'
  }
}

// main.js
import { render } from 'react-dom'
import { Provider } from 'react-simple-i18n'

import MyComponent from './my-component'
import { messages } from './messages'

render(
    <Provider messages={messages} default="es">
      <MyComponent />
    </Provider>,
    document.getElementById('root'));

// my-component.js
import React from 'react'
import { i18n } from 'react-simple-i18n'

class MyComponent extends React.Component {
  render() {
    const { message } = this.props.messages
    return (
      <div>
        {message}
      </div>
    )
  }
}

export default i18n(MyComponent)

```

As you can see the approach is pretty similar to the one used with Redux and that's the idea, take advantage of what we have and make it easier to use and implement