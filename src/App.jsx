import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/Dashboard';
import Login from './pages/LogIn';
import Roles from './pages/Roles';
import Logout from './components/Logout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/roles' element={<Roles />} />
        <Route path='/log-out' element={<Logout />} />
        {/* <Route element={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
