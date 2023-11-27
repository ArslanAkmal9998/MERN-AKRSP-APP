import 'bootstrap/dist/css/bootstrap.css';
import ContactListing from './components/ContactListing';
import { Routes,Route } from 'react-router-dom';
import ContactDetail from './components/ContactDetail';
import UpdateContact from './components/UpdateContact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <>
    <Routes>
 <Route path="/contact" element={<ContactListing/>}></Route>
 <Route path="/contact/:id" element={<ContactDetail/>}></Route>
 <Route path="/update-contact/:id" element={<UpdateContact/>}></Route>


  </Routes>
  <ToastContainer/>
  </>
  );
}

export default App;
