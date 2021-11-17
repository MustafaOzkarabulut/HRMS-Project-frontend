import './App.css';
import Navi from './layouts/Navbar/Navi';
import Footer from './layouts/Footer/Footer.jsx';
import Dashboard from './layouts/Dashboard/Dashboard';
import Home from './pages/Home/Home/Home';
import AddAdvertisement from './pages/AddAdvertisement/AddAdvertisement';
import EmployerDetail from './pages/EmployerDetail/EmployerDetail';
import AdvertisementDetail from './pages/AdvertisementDetail/AdvertisementDetail';
import { Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navi/>
      <div className="container">
      <Route exact path='/advertisement' component={Dashboard} />
      <Route exact path="/Advertisement/:namee" component={AdvertisementDetail}/>
      <Route exact path="/employers/:name" component={EmployerDetail}/>
      <Route exact path='/candidates' component={Dashboard} />
      <Route exact path="/add/Advertisement" component={AddAdvertisement} />
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      </div>
      

    </div>
  );
}

export default App;
 