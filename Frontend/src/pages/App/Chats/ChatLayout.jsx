import React from "react";
import Conversations from "./Conversations";
import ChatArea from "./ChatArea";
import ProfileSection from "./ProfileSection";


function ChatLayout() {
  return (
    <>
      <div className="grid grid-cols-4 w-full h-screen">
        <Conversations className='col-start-1' />
        <ChatArea className='col-span-2' />
        <ProfileSection className='col-end-5' />
      </div>
    </>
  );
}

export default ChatLayout;
