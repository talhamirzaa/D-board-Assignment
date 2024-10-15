import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
    
    <div className="min-h-screen bg-gray-100">
      <BrowserRouter>
        
         
            <Routes>

              <Route path="/" element={<Login />}>
              </Route>
              <Route path="/Register" element={<SignUp/>}>
              </Route>
              <Route path="/Dashboard" element={<Dashboard/>}>
              </Route>

            </Routes>
        
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
