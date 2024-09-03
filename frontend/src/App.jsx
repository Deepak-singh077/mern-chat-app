import { useState } from 'react';
import './App.css';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx'
import Home from './pages/home/Home.jsx';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'> {/* Fixed className spacing */}
      <Home/>
      </div>
    </>
  );
}

export default App;
