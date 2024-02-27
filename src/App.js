import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

function App() {
  return (
   <Router> 
    <div className="App">
            
     <Switch>
         <Route exact Path = "/Login">
             <Login/>
          </Route>

          <Route Path = "/Dashboard">
             <Dashboard/>
          </Route>
     </Switch>
      

    </div>
    
   </Router>
  );
}

export default App;
