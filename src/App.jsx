import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/Dashboard';
import Login from './pages/LogIn';

import Logout from './components/Logout';
import RoleTable from './components/RoleTable';
import AdminTable from './components/AdminTable';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard/roles' element={<RoleTable />} />
          <Route path='/dashboard/admin' element={<AdminTable />} />
        </Route>
        <Route path='/log-in' element={<Login />} />
        <Route path='/log-out' element={<Logout />} />
        {/* <Route element={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )

}

export default App;
