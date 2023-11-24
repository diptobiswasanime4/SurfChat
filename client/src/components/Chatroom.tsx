import React, { useContext, useEffect } from "react";
import Chatbox from "./Chatbox";
import Sendbox from "./Sendbox";
import { SocketContext } from "../SocketProvider";
import { useRecoilState, useRecoilValue } from "recoil";
import { chatState } from "../state/atoms/ChatState";
import { totalUserState } from "../state/atoms/totalUserState";

function Chatroom() {
  const [totalUsers, setTotalUsers] = useRecoilState(totalUserState);
  const socket = useContext(SocketContext);
  const chat = useRecoilValue(chatState);

  async function getTotalUsers() {
    await socket.on("total-users", (data) => {
      console.log("Total Users: ", data);
      setTotalUsers(data);
    });
  }
  useEffect(() => {
    getTotalUsers();
  }, [chat]);

  return (
    <div className="flex flex-col items-center gap-4 pt-4 pb-16 bg-gray-100">
      <div className="text-2xl">Surf Chat</div>
      <div className="text-orange-800 text-xl absolute right-8">
        {totalUsers} Connections
      </div>
      <Chatbox />
      <Sendbox />
    </div>
  );
}

export default Chatroom;
