import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">      
<BrowserRouter>
<Routes>
  <Route index element= {<Login />} />
  <Route Path = "/Dashboard" component={Dashboard}   />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
