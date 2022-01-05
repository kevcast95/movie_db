import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login';
import Home from './pages/Home';
import Details from './pages/Detail';
import Favorites from './pages/Favorites';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/favorites" element={<Favorites/>} />
          <Route exact path="/details" element={<Details/>} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          {/* Same as */}
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
