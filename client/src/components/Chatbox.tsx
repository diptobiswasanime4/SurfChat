import React, { useState, useEffect, useContext } from "react";
import { SocketContext } from "../SocketProvider";
import { useRecoilState, useRecoilValue } from "recoil";
import { chatState } from "../state/atoms/ChatState";
import { userState } from "../state/atoms/userState";

function Chatbox() {
  const user = useRecoilValue(userState);
  const [chat, setChat] = useRecoilState(chatState);
  const socket = useContext(SocketContext);

  // console.log(socket);

  // async function loadChat() {
  //   await socket.on("chat-message", (data) => {
  //     setChat(data.text);
  //     console.log(data);
  //   });
  // }
  async function userConnected() {
    await socket.on("user-connected", (user) => {
      setChat([
        ...chat,
        { user: user, text: " joined the chat", dir: " mr-auto" },
      ]);
    });
  }
  async function getChatMessage() {
    await socket.on("chat-message", (data) => {
      setChat([...chat, { ...data, dir: " mr-auto" }]);
      console.log(chat);
    });
  }
  async function userDisconnected() {
    await socket.on("user-disconnected", (user) => {
      setChat([
        ...chat,
        { user: user.name, text: " left the chat", dir: " mr-auto" },
      ]);
    });
  }

  useEffect(() => {
    userConnected();
    getChatMessage();
    userDisconnected();
    // loadChat();
  }, [chat]);

  return (
    <div className="flex flex-col gap-2 w-3/4 h-[300px] bg-yellow-200 border-2 border-black rounded-lg py-2 px-1 overflow-y-auto">
      <div className="mr-auto bg-orange-500 text-white p-1 text-lg w-2/3 rounded-lg">
        Incoming message
      </div>
      <div className="ml-auto bg-orange-500 text-white p-1 text-lg w-2/3 rounded-lg">
        Outgoing message
      </div>
      {chat.map((msg) => {
        return (
          <div
            className={
              "bg-orange-500 text-white p-1 text-lg w-2/3 rounded-lg" + msg.dir
            }
          >
            {msg.user}: {msg.text}
          </div>
        );
      })}
    </div>
  );
}

export default Chatbox;
