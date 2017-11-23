import React , {Component} from 'react';
import { Welcome, Main } from './containers';
import { Provider } from 'react-redux';
import { store } from './store';
//import { Navigator } from 'react-native';


export class Root extends Component {
  constructor() {
    super();
    this.state = {
      started: false
    };
  }

  startWorkout = () => {
    this.setState({ started: true });
  }

  renderRoot(ComponentToRender) {
    //let height = Navigator.NavigationBar.Styles.General.TotalNavHeight
    return (
      <Provider store={store}>
        <ComponentToRender startWorkout={this.startWorkout} style={{ paddingTop: 50}} />
      </Provider>
    )
  }
  
  render() {
    const { started } = this.state;
    return started ? this.renderRoot(Main) : this.renderRoot(Welcome)
  }
}
