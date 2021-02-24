import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/HomeNavbar/Navbar';
import Resources from './Pages/Resources';
import Schemes from './Pages/Schemes';
import Farmanalysis from './Pages/Farmanalysis/Farmanalysis';
import Dashboard from './Pages/Dashboard/Dashboard';
import Store from './Pages/Store/Store';
import Alerts from './Pages/Alerts/Alerts';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/Farmanalysis' component={Farmanalysis} />
          <Route path='/alerts' component={Alerts} />
          <Route path='/store' component={Store} />
          <Route path='/resources' component={Resources} />
          <Route path='/schemes' component={Schemes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
