import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/LogIn';
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
      </Routes>
    </BrowserRouter>
  )

}

export default App;
