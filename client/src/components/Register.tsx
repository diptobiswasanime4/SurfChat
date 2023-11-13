import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  function joinRoom() {
    navigate(`/chatroom`);
  }

  return (
    <div className="flex flex-col items-center gap-4 pt-4 pb-16 bg-blue-200 shadow-md">
      <div className="text-2xl">Surf Chat</div>
      <input
        className="border text-xl w-2/3"
        type="text"
        placeholder="Enter your name"
      />
      <button
        onClick={joinRoom}
        className="bg-green-600 hover:bg-green-500 text-white text-xl py-1 px-3 rounded-md shadow-md"
      >
        Join
      </button>
    </div>
  );
}

export default Register;
