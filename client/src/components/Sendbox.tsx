import React, { useState, useContext } from "react";
import { SocketContext } from "../SocketProvider";

function Sendbox() {
  const [inputText, setInputText] = useState("");
  const socket = useContext(SocketContext);
  async function sendMessage() {
    socket.emit("send-chat-message", inputText);
  }
  return (
    <div className="flex gap-2 w-3/4">
      <input
        className="border text-xl w-full"
        type="text"
        placeholder="Enter message"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={sendMessage}
        className="bg-blue-600 hover:bg-blue-500 text-white text-xl py-1 px-3 rounded-md shadow-md"
      >
        Send
      </button>
    </div>
  );
}

export default Sendbox;
