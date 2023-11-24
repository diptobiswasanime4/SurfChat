import React, { useState, useContext } from "react";
import { SocketContext } from "../SocketProvider";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../state/atoms/userState";
import { chatState } from "../state/atoms/ChatState";

function Sendbox() {
  const user = useRecoilValue(userState);
  const [chat, setChat] = useRecoilState(chatState);
  const [inputText, setInputText] = useState("");
  const socket = useContext(SocketContext);

  console.log("User: ", user);

  async function sendMessage() {
    setChat([...chat, { user: user, text: inputText, dir: " ml-auto" }]);
    await socket.emit("send-chat-message", { user: user, text: inputText });
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
