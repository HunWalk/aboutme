import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'
import tronsauce from 'reactotron-apisauce'

Reactotron
  .configure() // we can use plugins here -- more on this later
  .use(reactotronRedux())
  .use(sagaPlugin())
  .use(tronsauce())
  .connect() // let's connect!
  .clear()

console.tron = Reactotron

export default Reactotron