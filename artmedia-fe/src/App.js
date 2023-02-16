import {Routes,Route} from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import NotFound from './pages/not-found';
import PrivateRoutes from './utils/privateRoutes';
import { ToastContainer} from 'react-toastify';
import Register from './pages/register';

function App() {
  return (
   <>
    <Routes>
      <Route element={<PrivateRoutes/>}>
      <Route path="/dashboard" element={<Dashboard/>} exact />
      </Route>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} exact />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <ToastContainer/>
    </> 
  );
}

export default App;
