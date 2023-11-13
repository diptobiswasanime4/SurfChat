import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Chatroom from "./components/Chatroom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />}></Route>
      <Route path="chatroom" element={<Chatroom />}></Route>
    </Routes>
  );
}

export default App;
