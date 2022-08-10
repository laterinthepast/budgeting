import React from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import Account from "./Account";
import {Route, Routes} from "react-router-dom";
import { AuthContextProvider } from "../contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";




function App() {
  return (
   <div className="w-100" style={{maxWidth:"400px"}}>
   <AuthContextProvider>
   <Routes>
      <Route path="/" element={<Signin></Signin>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/account" element={
      <ProtectedRoute><Account></Account></ProtectedRoute>}> 
      </Route>
    </Routes>
   </AuthContextProvider>
   
   </div>
  
  )
}

export default App;
