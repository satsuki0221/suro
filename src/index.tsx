import * as React from 'react'
import * as ReactDom from 'react-dom'
import * as injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin()

import { Hello } from './components/Hello'
import { Navbar } from './components/Navbar'

class App extends React.Component {
  render() {
    return(
      <MuiThemeProvider>
        <Navbar />
      </MuiThemeProvider>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app'),
)
