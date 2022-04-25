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
import UploadFiles from './components/upload-files/upload-files';
import LogOut from './pages/logout/log-out';
import Users from './pages/users/users';
import Privacy from './pages/privacy/privacy';
import Cookies from './pages/cookies/cookies';
import NotFound from './pages/not-found/not-found';
// import Edit from './components/edit/edit';

function App() {
  let token = localStorage.getItem('access_token')
  
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={token?<UserHome />:<LandinPage />}></Route>
            <Route path="user" element={
              <ProtectedPage>
                <UserHome />
              </ProtectedPage>
            }></Route>
            <Route path='/logout' element={<LogOut />}></Route>
            <Route path="user/page" element={
              <ProtectedPage>
                <UserPage />
              </ProtectedPage>
            }></Route>
            <Route path='/files' element={<UploadFiles />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="users" element={<Users />}></Route>
            <Route path='/validate' element={<Validate />}></Route>
            <Route path='/privacy' element={<Privacy />}></Route>
            <Route path='/cookies' element={<Cookies />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
            {/* <Route path='/*' element={<Validate />}></Route> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
