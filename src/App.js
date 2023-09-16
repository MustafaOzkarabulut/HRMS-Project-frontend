import "./App.css";
import Navi from "./layouts/Navbar/Navi";
import Footer from "./layouts/Footer/Footer.jsx";
import Dashboard from "./layouts/Dashboard/Dashboard";
import Home from "./pages/Home/Home/Home";
import AddAdvertisement from "./pages/AddAdvertisement/AddAdvertisement";
import EmployerDetail from "./pages/EmployerDetail/EmployerDetail";
import AdvertisementDetail from "./pages/AdvertisementDetail/AdvertisementDetail";
import { Route, Redirect, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Sector from "./pages/Sector/Sector";
import NotFound from "./pages/NotFound";
import Detail from "./Components/Detail";
import AdvertisementDetailDash from "./layouts/Dashboard/AdvertisementDetailDash";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navi />
      
        <Route exact path="/advertisement" component={Dashboard} />
        <Route exact path="/Advertisement/:namee" component={AdvertisementDetailDash} />
        <Route exact path="/Advertisementdetail"component={AdvertisementDetailDash} />
        <Route exact path="/sector/:namesector" component={Sector} />
        <Route exact path="/employers/:name" component={EmployerDetail} />
        <Route exact path="/candidates" component={Dashboard} />
        <Route exact path="/add/Advertisement" component={AddAdvertisement} />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
      <Footer />
    </div>
  );
}

export default App;
