import Home from './pages/home';
import {
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          
        </Switch>
    </div>
  );
}

export default App;
