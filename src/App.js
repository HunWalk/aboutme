import React, {Component} from 'react'
import WebFont from 'webfontloader'
import { Provider } from 'react-redux'


import RootContainer from './RootContainer'

import createStore from './Redux'

const store = createStore()

class App extends Component
{
  
  UNSAFE_componentWillMount(){

    document.body.style.margin = 0;

    WebFont.load({
      google: {
        families: ['Montserrat:400,900']
      }
    });
  }

  render(){
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }

}

export default App;
