import 'bootstrap/dist/css/bootstrap.css';
import Contactus from './components/Contactus';
import SignUp from './components/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
  <Route path="/contact" element={<Contactus/>}/>
  <Route path="/signup" element={<SignUp/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/dashboard" element={<Dashboard/>}></Route>

  </Routes>
  <ToastContainer/>
  </>
  );
}

export default App;
