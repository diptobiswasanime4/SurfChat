import React, { useContext } from "react";
import Chatbox from "./Chatbox";
import Sendbox from "./Sendbox";
import { SocketContext } from "../SocketProvider";

function Chatroom() {
  const socket = useContext(SocketContext);
  console.log(socket);

  return (
    <div className="flex flex-col items-center gap-4 pt-4 pb-16 bg-blue-200 shadow-md">
      <div className="text-2xl">Surf Chat</div>
      <Chatbox />
      <Sendbox />
    </div>
  );
}

export default Chatroom;
