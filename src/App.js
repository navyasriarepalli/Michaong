import {BrowserRouter,Route} from 'react-router-dom'
import Game from './components/Game'

import InputPage from './components/InputPage'
import ResultPage from './components/ResultPage'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'

const App = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={InputPage}/>
    <Route exact path="/game" component={Game}/>
    <Route exact path="/result" component={ResultPage}/>
  </Switch>
  </BrowserRouter>


  
  
    

)
export default App;