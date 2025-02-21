import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TerminalIcon from "@mui/icons-material/Terminal";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Program",
    icon: <TerminalIcon />,
    link: "/program",
  },
  {
    title: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
  {
    title: "Contact",
    icon: <ContactPageIcon />,
    link: "/contact",
  },
];
