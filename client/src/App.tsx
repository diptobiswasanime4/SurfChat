import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Chatroom from "./components/Chatroom";
import { SocketProvider } from "./SocketProvider";

function App() {
  return (
    <SocketProvider>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="chatroom" element={<Chatroom />}></Route>
      </Routes>
    </SocketProvider>
  );
}

export default App;
