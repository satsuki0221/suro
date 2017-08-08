import * as React from 'react';
import * as ReactDom from 'react-dom';
import {observable} from "mobx";
import {observer} from 'mobx-react';

import { Hello } from './components/Hello';

class AppState {
  id = Math.random();
  @observable counter = 0;
}

interface Props {
  data: {
    counter: number;
  }
}

@observer
class App extends React.Component<Props> {
  render() {
    return <div className="app">{this.props.data.counter}</div>
  }
}

const appState = new AppState();
ReactDom.render(
  <App data={appState} />,
  document.getElementById('app')
);

setInterval(() => {
  appState.counter += 1;
}, 1000);
