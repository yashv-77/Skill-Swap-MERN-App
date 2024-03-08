import React, { useState } from "react";

import BrandLogo from "../../assets/brandLogo.svg?react";
import { Avatar, Tooltip } from "@material-tailwind/react";
import Homesvg, {
    Chatsvg,
    Peer,
    Task,
    Vcall,
    Bell
} from "../../assets/icons/dashsvg";
import BrandName from "../../assets/brandName.svg?react";
import { NavLink } from "react-router-dom";



function Sidebar() {
    const [selected, setSelected] = useState(null);

    const sidebarList = (
        <ul className=" flex flex-col items-center gap-y-3">
            <Tooltip
                content="Home"
                placement="right"
                className="rounded-full  font-poppins bg-gray-900"
            >
                <NavLink to={'/app'}>
                    <li
                        onClick={() => setSelected(0)}
                        className={`p-4 hover:bg-gray-200 ${selected === 0 ? "bg-second-500" : "bg-none"}  cursor-pointer rounded-full`}
                    >
                        <Homesvg />
                    </li>
                </NavLink>

            </Tooltip>
            <Tooltip
                content="Messages"
                placement="right"
                className="rounded-full font-poppins bg-gray-900"
            >
                <NavLink to={'messages'}>
                <li
                    onClick={() => setSelected(1)}
                    className={`p-4 hover:bg-gray-200 ${selected === 1 ? "bg-second-500" : "bg-none"
                        }  cursor-pointer rounded-full`}
                >
                    <Chatsvg />
                </li>
                </NavLink>
               
            </Tooltip>
            <Tooltip
                content="Peers"
                placement="right"
                className="rounded-full font-poppins bg-gray-900"
            >
                <li
                    onClick={() => setSelected(2)}
                    className={`p-4 hover:bg-gray-200 ${selected === 2 ? "bg-second-500" : "bg-none"
                        }  cursor-pointer rounded-full`}
                >
                    <Peer />
                </li>
            </Tooltip>
            <Tooltip
                content="Calls"
                placement="right"
                className="rounded-full font-poppins bg-gray-900"
            >
                <li
                    onClick={() => setSelected(3)}
                    className={`p-4 hover:bg-gray-200 ${selected === 3 ? "bg-second-500" : "bg-none"
                        }  cursor-pointer rounded-full`}
                >
                    <Vcall />
                </li>
            </Tooltip>
            <Tooltip
                content="Tasks"
                placement="right"
                className="rounded-full font-poppins bg-gray-900"
            >
                <li
                    onClick={() => setSelected(4)}
                    className={`p-4 hover:bg-gray-200 ${selected === 4 ? "bg-second-500" : "bg-none"
                        }  cursor-pointer rounded-full`}
                >
                    <Task />
                </li>
            </Tooltip>

        </ul>
    );

    return (
        <div className="flex">
            <div className="flex flex-col h-screen items-center justify-between p-5 border-r-2">
                <div className="flex flex-col items-center gap-y-10" >
                    <Tooltip
                        content={<BrandName />}
                        placement="right"
                        className=" bg-white shadow-2xl border-blue-gray-800"
                    >
                        <div>
                            <BrandLogo />
                        </div>
                    </Tooltip>

                    {sidebarList}
                </div>


                <div className="py-1 cursor-pointer">
                    <Avatar
                        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="avatar"
                        withBorder={true}
                        className="p-0.5"
                    />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
