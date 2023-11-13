import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Socket } from "socket.io-client/debug";

export const SocketContext = createContext(null);

const ENDPOINT = "http://localhost:3000";

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(ENDPOINT);
    setSocket(newSocket);
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
