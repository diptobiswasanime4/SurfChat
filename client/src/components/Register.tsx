import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../state/atoms/userState";
import { SocketContext } from "../SocketProvider";
import { chatState } from "../state/atoms/ChatState";
import { v4 } from "uuid";

function Register() {
  const [chat, setChat] = useRecoilState(chatState);
  const [user, setUser] = useRecoilState(userState);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const socket = useContext(SocketContext);

  async function joinRoom() {
    await socket.emit("send-user-connected", { id: v4(), name: input });
    setUser(input);
    navigate(`/chatroom`);
  }

  async function join1on1() {}

  return (
    <div className="flex flex-col items-center gap-4 pt-4 pb-16 bg-blue-200 shadow-md">
      <div className="text-2xl">Surf Chat</div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border text-xl w-2/3"
        type="text"
        placeholder="Enter your name"
      />
      <div className="flex gap-4">
        <button
          onClick={joinRoom}
          className="bg-green-600 hover:bg-green-500 text-white text-xl py-1 px-3 rounded-md shadow-md"
        >
          Join
        </button>
        <button
          onClick={join1on1}
          className="bg-green-600 hover:bg-green-500 text-white text-xl py-1 px-3 rounded-md shadow-md"
        >
          1on1
        </button>
      </div>
    </div>
  );
}

export default Register;
