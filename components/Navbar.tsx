import { IconHome, IconUser, IconMail } from "@tabler/icons-react";
import { Dock } from "./ui/FloatingDock";
import { GrTechnology } from "react-icons/gr";
import { PiProjectorScreenFill } from "react-icons/pi";

const Navbar = () => {
  const dockItems = [
    {
      title: "Home",
      icon: <IconHome />,
      href: "#home",
    },
    {
      title: "About",
      icon: <IconUser />,
      href: "#about",
    },
    {
      title: "Skiils & Technologies",
      icon: <GrTechnology />,
      href: "#skills",
    },
    {
      title: "My Work",
      icon: <PiProjectorScreenFill />,
      href: "#myWork",
    },
    {
      title: "Contact",
      icon: <IconMail />,
      href: "#contact",
    },
  ];

  return <Dock items={dockItems} />;
};

export default Navbar;
