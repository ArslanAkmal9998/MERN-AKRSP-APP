import 'bootstrap/dist/css/bootstrap.css';
import Contactus from './components/Contactus';
import SignUp from './components/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
  <Contactus/>
  <SignUp/>
  <ToastContainer/>
  </>
  );
}

export default App;
