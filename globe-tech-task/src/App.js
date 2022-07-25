import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Services from './components/Services/Services';
import Header from './Header/Header';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/header">
          <Header></Header>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
