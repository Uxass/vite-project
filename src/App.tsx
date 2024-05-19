// App.jsx
/* eslint-disable */
import { useState } from 'react';
import './App.css';
import MainRouter from './app/routing';
import Navbar from './components/navbar';
import GlobalStyles from './global-styles';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div>
      <Navbar setIsAuth={setIsAuth} isAuth={isAuth} />
      <GlobalStyles></GlobalStyles>
      <MainRouter />
    </div>
  );
};

export default App;
