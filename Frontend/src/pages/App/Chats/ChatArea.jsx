import React, { useContext, useEffect, useState } from 'react'
import { Avatar, Badge, Tooltip, Chip, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import DeleteSvg from "../../../assets/icons/delete.svg?react";
import LinkSvg from "../../../assets/icons/link.svg?react";
import SendSvg from "../../../assets/icons/send.svg?react";
import MessageSelf from './MessageSelf';
import MessageOther from './MessageOther';

import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';

function ChatArea({ className }) {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const { authUser, setAuthUser, selectedChat } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    // console.log(authUser);
    // const context = useOutletContext();
    console.log("selected chat ", selectedChat);


    const sendMessage = async (event) => {
        if (event.key === "Enter" && newMessage) {
            // event.preventDefault()
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${authUser.token}`
                    }
                }
                setNewMessage("");
                const { data } = await axios.post(`http://localhost:6001/api/messages`, {
                    message: newMessage,
                    chatId: selectedChat._id,
                }, config);
                setMessages([...messages, data])

            } catch (error) {
                console.log("error in sending message ", error);
            }
        }
    }
    const typingHandler = (e) => {
        setNewMessage(e.target.value)
    }
    const fetchMessages = async () => {
        if (!selectedChat) return;
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${authUser.token}`
                }
            }
            const { data } = await axios.get(`http://localhost:6001/api/messages/${selectedChat._id}`, config);
            setMessages(data);
            console.log("fetched messages ", data);
        } catch (error) {
            console.log("error in fetching messages ", error);
        }
    }

    useEffect(() => {
        fetchMessages();
    }
        , [selectedChat._id])
    return (
        <div className={`flex flex-col h-screen border-x  ${className}`}>
            <div className=' flex items-center justify-between mx-7 py-3 align-top '>

                <div className='flex  items-center justify-between gap-5 '>

                    <div className=' '>
                        <Avatar src={'https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600'} alt="avatar" size="lg" />
                    </div>
                    <div>
                        <p className='font-semibold text-xl'>{selectedChat.users[1].name}</p>
                        <Chip variant='ghost' color='green' value='online' className='inline' size='sm' />
                        {/* <p className='text-xs text-gray-600'>{'5.32 pm'}</p> */}
                    </div>

                </div>

                <ul>
                    <Tooltip content='Delete Chats' className='font-poppins rounded-full bg-gray-600'>
                        <li className='cursor-pointer hover:bg-red-300 p-3 rounded-full'><DeleteSvg /></li>
                    </Tooltip>
                </ul>

            </div>

            {/* Chat Container */}
            <div className='p-5 bg-gray-200 max-h-[750px] flex flex-col  gap-5 overflow-auto'>
                
                {
                    messages
                    .reverse()
                    .map((message, index) => {
                        // console.log("message.senderId: ", message.senderId._id);
                        console.log("message check ", message);
                        const sender = message.senderId._id;
                        const self_id = authUser._id;
                        // console.log("sender Id ", sender);
                        // console.log("self Id ", self_id);
                        if (sender === self_id) {
                            return <MessageSelf key={index} message={message} />
                        } else {
                            return <MessageOther key={index} message={message} />
                        }
                    })
                }
                {/* <MessageSelf />
                <MessageOther />
                <MessageSelf />
                <MessageOther />
                <MessageSelf />
                <MessageOther />
                <MessageOther />
                <MessageSelf />
                <MessageOther />
                <MessageSelf />
                <MessageOther />
                <MessageSelf />
                <MessageSelf />
                <MessageSelf /> */}


            </div>
            {/* Chat Container */}

            <div className=" align-bottom p-5  flex gap-3 items-center ">
                <div className='p-3 hover:bg-gray-200 rounded-full'>
                    <LinkSvg />
                </div>
                <input
                    placeholder="talk about your skills .  .  .  ."
                    type="text"
                    value={newMessage}
                    onKeyDown={sendMessage}
                    onChange={typingHandler}
                    className=" w-full bg-gray-100 text-md outline-none rounded-[21px]  p-4 focus:ring-2 focus:ring-prime-500 focus:bg-gray-50"
                />
                <div className='p-3 hover:bg-gray-200 rounded-full' onClick={sendMessage}>
                    <SendSvg />
                </div>

            </div>

        </div>
    )
}

export default ChatArea