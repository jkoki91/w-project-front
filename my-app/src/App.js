import './App.css';
import LandinPage from './pages/landing-page/landing-page';
import React from 'react';
import ThemeProvider from './context/theme-provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserHome from './pages/user-home/user-home';
import Register from './components/register/register';
import Validate from './pages/validate/validate';
import ProtectedPage from './components/protected-route/protected-route';
import UserPage from './pages/user-page/user-page';
import Edit from './components/edit/edit';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<LandinPage />}></Route>
            <Route path="user" element={
              <ProtectedPage>
                <UserHome />
              </ProtectedPage>
            }></Route>
            <Route path="user/page" element={
              <ProtectedPage>
                <UserPage />
              </ProtectedPage>
            }></Route>
            <Route path='/edit' element={<Edit />}></Route>
            {/* <Route path="user/register" element={<Register />}></Route> */}
            <Route path="register" element={<Register />}></Route>
            <Route path='/validate' element={<Validate />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
