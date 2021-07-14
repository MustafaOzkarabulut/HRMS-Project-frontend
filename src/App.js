import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navbar/Navi';
import Footer from './layouts/Footer/Footer.jsx';
import Dashboard from './layouts/Dashboard/Dashboard';
import Home from './pages/Home/Home/Home';
import AddAdvertisement from './pages/AddAdvertisement/AddAdvertisement';

import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navi/>
      <div className="container">
      <Route exact path='/advertisement' component={Dashboard} />
      <Route exact path='/candidates' component={Dashboard} />
      <Route path="/Advertisement/Add" component={AddAdvertisement} />
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      </div>
      <Footer/>

    </div>
  );
}

export default App;
