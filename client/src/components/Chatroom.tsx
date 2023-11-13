import React from "react";
import Chatbox from "./Chatbox";
import Sendbox from "./Sendbox";

function Chatroom() {
  return (
    <div className="flex flex-col items-center gap-4 pt-4 pb-16 bg-blue-200 shadow-md">
      <div className="text-2xl">Surf Chat</div>
      <Chatbox />
      <Sendbox />
    </div>
  );
}

export default Chatroom;
