import React from 'react'
import { i18n } from 'react-simple-i18n'

class MyComponent extends React.Component {
  render() {
    console.log(this.props)
    const { message } = this.props.messages
    return (
      <div>
        {message}
      </div>
    )
  }
}

export default i18n(MyComponent)
