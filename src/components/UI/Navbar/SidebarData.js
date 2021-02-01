import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";

export const SidebarData = [
    {
        title: "Home",
        id: "1",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "About",
        id: "2",
        path: "/about",
        icon: <FcIcons.FcAbout />,
        cName: "nav-text",
    },
];
