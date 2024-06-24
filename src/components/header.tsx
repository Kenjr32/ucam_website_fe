import { Link, NavLink } from "react-router-dom";

import { DropdownMenu } from "@radix-ui/themes";
import Logo from "../assets/images/logo/Logo UCAM1.png";

import MenuIcon from "@mui/icons-material/Menu";
import Image from "../components/image/image";
import { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
export default function Header() {
  //const [lang, setLang] = useState("En");

  const [membersOpen, setMembersOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  const [mobileMembersOpen, setMobileMembersOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);

  const handleMouseEnterMembers = () => {
    setMembersOpen(true);
  };

  const handleMouseLeaveMembers = () => {
    setMembersOpen(false);
  };
  const handleMouseEnterMedia = () => {
    setMediaOpen(true);
  };

  const handleMouseLeaveMedia = () => {
    setMediaOpen(false);
  };

  // const handleMouseEnterMobileMembers = () => {
  //   setMobileMembersOpen(true);
  // };

  const handleMouseLeaveMobileMembers = () => {
    setMobileMembersOpen(false);
  };
  // const handleMouseEnterMobileMedia = () => {
  //   setMobileMediaOpen(true);
  // };

  const handleMouseLeaveMobileMedia = () => {
    setMobileMediaOpen(false);
  };

  return (
    <header className="w-full bg-white bg-opacity-100 top-0 absolute z-10 ">
      <nav className="  lg:px-10 px-2 min-h-20  flex lg:justify-start justify-between items-center">
        <div className="flex justify-between align-middle items-center gap-10 w-[100%]">
          <div className="w-52 h-[100%] object-contain">
            <Link to="/">
              <Image source={Logo} styling="" alt="" />
            </Link>
          </div>

          <menu className="hidden lg:flex justify-center gap-6 w-[100%] ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#007A33] text-xl font-bold  p-1 rounded-lg capitalize"
                  : "text-black text-xl hover:text-[#C8102E] font-bold p-1 capitalize"
              }
            >
              Home
            </NavLink>

            <div
              onMouseEnter={handleMouseEnterMembers}
              onMouseLeave={handleMouseLeaveMembers}
              className="text-black text-xl hover:cursor-pointer hover:text-[#C8102E] font-bold p-1 capitalize"
            >
              <DropdownMenu.Root
                open={membersOpen}
                onOpenChange={setMembersOpen}
              >
                <DropdownMenu.Trigger onClick={handleMouseEnterMembers}>
                  <p>
                    Members <KeyboardArrowDownRoundedIcon />
                  </p>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
                  onClick={handleMouseLeaveMembers}
                 
                >
                  <DropdownMenu.Item
                    key="1"
                    className="hover:bg-red-600 hover:text-white"
                  >
                    <Link to="partners">Partners</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    key="2"
                    className="hover:bg-red-600 hover:text-white "
                  >
                    <Link to="institutions">Institutions</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    key="3"
                    className="hover:bg-red-600 hover:text-white"
                  >
                    <Link to="join-us">Join Us</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    key="4"
                    className="hover:bg-red-600 hover:text-white"
                  >
                    <Link to="online-application">Online Application</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
            <div
              onMouseEnter={handleMouseEnterMedia}
              onMouseLeave={handleMouseLeaveMedia}
              className="text-black text-xl hover:text-[#C8102E] font-bold p-1 capitalize"
            >
              <DropdownMenu.Root open={mediaOpen} onOpenChange={setMediaOpen}>
                <DropdownMenu.Trigger onClick={handleMouseEnterMedia}>
                  <p>
                    Media <KeyboardArrowDownRoundedIcon />
                  </p>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
              
                  onClick={handleMouseLeaveMedia}
                
                >
                  <DropdownMenu.Item
                    key="1"
                    className="hover:bg-red-600 hover:text-white "
                  >
                    <Link to="gallery">Gallery</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    key="2"
                    className="hover:bg-red-600 hover:text-white"
                  >
                    <Link to="events">Events</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    key="3"
                    className="hover:bg-red-600 hover:text-white"
                  >
                    <Link to="resources">Resources</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#007A33] text-xl font-bold   p-1 rounded-lg capitalize"
                  : "text-black] text-xl hover:text-[#C8102E] font-bold p-1 capitalize"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/trustees"
              className={({ isActive }) =>
                isActive
                  ? "text-[#007A33] text-xl font-bold   p-1 rounded-lg capitalize"
                  : "text-black text-xl hover:text-[#C8102E] font-bold p-1 capitalize"
              }
            >
              Trustees
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#007A33] text-xl font-bold  p-1 rounded-lg capitalize"
                  : "text-black text-xl hover:text-[#C8102E] font-bold p-1 capitalize"
              }
            >
              Contact
            </NavLink>

            <div></div>
          </menu>
        </div>

        <div className="lg:hidden z-50 flex ">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="focus:border-2 ">
              <button className="flex flex-col justify-between lg:hidden">
                <MenuIcon
                  className="text-[#25554D]"
                  style={{ fontSize: "40px" }}
                />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              className="bg-white"
              style={{ backgroundColor: "white" }}
            >
              <DropdownMenu.Item className=" ">
                <Link
                  to="/le-centre"
                  className="text-[#C8102E] hover:text-[#25554D] font-bold text-sm"
                >
                  Home
                </Link>
              </DropdownMenu.Item>
              <div className="border w-[100%] border-[#25554D]  opacity-80"></div>
              <DropdownMenu.Item className="hover:bg-red-600 ">
                <div className="text-[#C8102E] hover:text-[#25554D] font-bold text-sm">
                  <DropdownMenu.Root
                    open={mobileMembersOpen}
                    onOpenChange={setMobileMembersOpen}
                  >
                    <DropdownMenu.Trigger>
                      <p>
                        Members <KeyboardArrowDownRoundedIcon />
                      </p>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item key="1">
                        <Link
                          to="partners"
                          onClick={handleMouseLeaveMobileMembers}
                        >
                          Partners
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item key="2">
                        <Link
                          to="institutions"
                          onClick={handleMouseLeaveMobileMembers}
                        >
                          Institutions
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item key="3">
                        <Link
                          to="join-us"
                          onClick={handleMouseLeaveMobileMembers}
                        >
                          Join Us
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item key="4">
                        <Link
                          to="online-application"
                          onClick={handleMouseLeaveMobileMembers}
                        >
                          Online Application
                        </Link>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </div>
              </DropdownMenu.Item>
              <div className="border w-[100%] border-[#25554D]  opacity-80"></div>

              <DropdownMenu.Item className="hover:bg-red-600 ">
                <Link
                  to=""
                  className="text-[#C8102E] hover:text-[#25554D] font-bold text-sm"
                >
                  <DropdownMenu.Root
                    open={mobileMediaOpen}
                    onOpenChange={setMobileMediaOpen}
                  >
                    <DropdownMenu.Trigger>
                      <p>
                        Media <KeyboardArrowDownRoundedIcon />
                      </p>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item key="1">
                        <Link
                          to="gallery"
                          onClick={handleMouseLeaveMobileMedia}
                        >
                          Gallery
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item key="2">
                        <Link to="events" onClick={handleMouseLeaveMobileMedia}>
                          Events
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item key="3">
                        <Link
                          to="resources"
                          onClick={handleMouseLeaveMobileMedia}
                        >
                          Resources
                        </Link>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </Link>
              </DropdownMenu.Item>

              <div className="border w-[100%] border-[#25554D] opacity-100"></div>
              <DropdownMenu.Item>
                <Link
                  to="about"
                  className="text-[#C8102E] hover:text-[#25554D] font-bold text-sm"
                >
                  About
                </Link>
              </DropdownMenu.Item>
              <div className="border w-[100%] border-[#25554D] opacity-100"></div>
              <DropdownMenu.Item>
                <Link
                  to="trustees"
                  className="text-[#C8102E] hover:text-[#25554D] font-bold text-sm"
                >
                  Trustees
                </Link>
              </DropdownMenu.Item>
              <div className="border w-[100%] border-[#25554D] opacity-100"></div>
              <DropdownMenu.Item>
                <Link
                  to="contact"
                  className="text-[#C8102E] hover:text-[#25554D] font-bold text-sm"
                >
                  Contact
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </nav>
    </header>
  );
}
