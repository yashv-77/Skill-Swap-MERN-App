import React from 'react'
import Sidebar from './Sidebar'
import ChatLayout from './Chats/ChatLayout'
import { Outlet } from 'react-router'




function MainLayout() {

  return (
    <>
        <div className='flex '>
          <Sidebar/>
          <div className='w-full'>
            {/* <ChatLayout/> */}
            <Outlet/>
          </div>
          

        </div>
    </>
  )
}

export default MainLayout