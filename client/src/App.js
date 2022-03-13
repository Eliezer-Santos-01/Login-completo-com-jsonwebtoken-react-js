import React,{useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './Auth/Auth';
import { AuthContext } from './Auth/Auth';

const App = () => {


  const Private = ({children}) => {

    const {authenticated, loading} = useContext(AuthContext);
    
    if(loading) {
      return <>....Carregando</>
    }

    if(!authenticated) {
      return <Navigate to="/Login"/>
    }

    return children
  };
  
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Private><Home/></Private>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App