import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Dashboard from "./components/Dashboard";
import SendMoney from "./components/send";

function App() {
return (
    <><div>hello there</div>
       <BrowserRouter>
        <Routes>
          <Route path="/signup"  element={<Signup/>} />
          <Route path="/signin"  element={<Signin/>} />
          <Route path="/dashboard"  element={<Dashboard/>} />
          <Route path="/send"  element={<SendMoney/>} />
        </Routes>
      </BrowserRouter>
    </>

)
}

export  default App;