# React simple i18n

Small library to handle i18n using the new [Context API](https://reactjs.org/docs/context.html) from React

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
    <Provider messages={messages} initial="es">
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

As you can see the approach is pretty similar to the one used with Redux and that's the idea, take advantage of what we have and make it easier to use and implement. So following the same approach as Redux, we can use selectors too :D

### Advanced Usage

```js
import React from 'react'
import { i18n } from 'react-simple-i18n'

class MyComponent extends React.Component {
  render() {
    const { hello } = this.props
    return (
      <div>
        {hello}
      </div>
    )
  }
}

const mapMessagesToProps = messages => {
  return  {
    hello: messages.message
  }
}

export default i18n(MyComponent, mapMessagesToProps)
```

### Reconcilier

What is a reconcilier? well, a reconcilier is my intend to use the same base object, ie: you can define a default skeleton and then overrides it as you need it:

```js
// messages.js
export const messages = {
  default: {
    hello: 'Hello',
    name: 'JC Gomez'
  },
  es: {
    hello: 'Hola'
  }
}

// main.js
import { render } from 'react-dom'
import { Provider } from 'react-simple-i18n'

import MyComponent from './my-component'
import { messages } from './messages'

render(
    <Provider messages={messages} reconcilier={true} initial="es">
      <MyComponent />
    </Provider>,
    document.getElementById('root'));

// my-component.js
import React from 'react'
import { i18n } from 'react-simple-i18n'

class MyComponent extends React.Component {
  render() {
    const { hello, name } = this.props.messages
    return (
      <h1>
        {hello} <small>{name}</small>
      </h1>
    )
  }
}

/*
 * since we are using the reconcilier the messages Object will be the following:
 * {
 *    hello: 'Hola',
 *    name: 'JC Gomez'
 * }
 */

export default i18n(MyComponent)
```

As you can see, we didn't define the word `name` but the value exists anyway, this is because the reconcilier, we define the static messages in the `default`
 key and just change the important messages on the remaining languages; why? to avoid writting the same values in dfferent objects.
 
 By default the `reconcilier` will use the `default` object as the source of truth, but you can change this by passing the prop `reconcilierWith` (You need to pass the `reconcilier` prop when you use this prop):
 
 ```js
 // messages.js
export const messages = {
  en: {
    hello: 'Hello',
    name: 'JC Gomez'
  },
  es: {
    hello: 'Hola'
  }
}

// main.js
import { render } from 'react-dom'
import { Provider } from 'react-simple-i18n'

import MyComponent from './my-component'
import { messages } from './messages'

render(
    <Provider messages={messages} reconcilierWith="en" initial="es">
      <MyComponent />
    </Provider>,
    document.getElementById('root'));
 ```