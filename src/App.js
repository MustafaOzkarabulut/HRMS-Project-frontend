import './App.css';
import Navi from './layouts/Navbar/Navi';
import Footer from './layouts/Footer/Footer.jsx';
import Dashboard from './layouts/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Navi/>
      <div className="container">
        <Dashboard/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
