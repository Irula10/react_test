import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Message } from "./pages/Message";
import { Buttons } from "./pages/Buttons";
import { Router } from "./pages/Router";
import { Counters } from "./pages/Countters";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route index path='/' element={<Router />}>
            <Route index element={<Message />} />
            <Route path='Buttons' element={<Buttons />} />
            <Route path='Counters' element={<Counters />} />
          </Route>  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
