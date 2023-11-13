import React, { useState, useEffect, useContext } from "react";
import { SocketContext } from "../SocketProvider";
import { useRecoilState } from "recoil";
import { chatState } from "../state/atoms/ChatState";

function Chatbox() {
  const [chat, setChat] = useRecoilState(chatState);
  const socket = useContext(SocketContext);

  console.log(socket);

  async function loadChat() {
    await socket.on("chat-message", (msg) => {
      setChat(msg);
      console.log(msg);
    });
  }

  useEffect(() => {
    loadChat();
  }, [chat]);

  // useEffect(() => {
  //   socket.on("chat-message", (msg) => {
  //     console.log(msg);
  //     setChat(msg);
  //   });

  //   return () => {
  //     socket.off("chat-message");
  //   };
  // }, []);

  return (
    <div className="flex flex-col gap-2 w-3/4 h-[300px] bg-yellow-200 border-2 border-black py-2 px-1">
      <div className="mr-auto bg-green-700 text-white p-1 text-lg w-2/3 rounded-lg">
        Incoming message
      </div>
      <div className="ml-auto bg-green-700 text-white p-1 text-lg w-2/3 rounded-lg">
        Outgoing message
      </div>
    </div>
  );
}

export default Chatbox;
