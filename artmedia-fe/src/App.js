import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import NotFound from './pages/not-found';
import PrivateRoutes from './utils/privateRoutes';
import PrivateRoute from './utils/privateRoute';
import { ToastContainer } from 'react-toastify';
import Register from './pages/register';
import Test from './pages/test/test';

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} exact />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<PrivateRoute/>}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/test" element={<Test />} /> */}
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;



