import {BrowserRouter, Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navigation from './components/Shared/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login'
function App() {
  return (
    <>
<BrowserRouter>
<Navigation/>
<Switch>
  <Route path="/" exact>
<Home />
          </Route>
          <Route path="/register" exact>
<Register />
  </Route>
  <Route path="/login" exact>
<Login />
  </Route>
</Switch>
</BrowserRouter>

    </>
  );
}

export default App;
