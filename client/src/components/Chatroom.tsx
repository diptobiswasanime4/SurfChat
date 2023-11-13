import React from "react";

function Chatroom() {
  return (
    <div className="flex flex-col items-center gap-4 pt-4 pb-16 bg-blue-200 shadow-md">
      <div className="text-2xl">Surf Chat</div>
      <div className="flex flex-col gap-2 w-3/4 h-[300px] bg-yellow-200 border-2 border-black py-2 px-1">
        <div className="mr-auto bg-green-700 text-white p-1 text-lg w-2/3 rounded-lg">
          Incoming message
        </div>
        <div className="ml-auto bg-green-700 text-white p-1 text-lg w-2/3 rounded-lg">
          Outgoing message
        </div>
      </div>
      <div className="flex gap-2 w-3/4">
        <input
          className="border text-xl w-full"
          type="text"
          placeholder="Enter message"
        />
        <button className="bg-blue-600 hover:bg-blue-500 text-white text-xl py-1 px-3 rounded-md shadow-md">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatroom;
