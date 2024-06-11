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

            <NavLink
              to="/activites"
              className={({ isActive }) =>
                isActive
                  ? "text-[#007A33] text-xl font-bold  p-1 rounded-lg capitalize"
                  : "text-black text-xl hover:text-[#C8102E] font-bold p-1 capitalize"
              }
            >
              <DropdownMenu.Root
                open={membersOpen}
                onOpenChange={setMembersOpen}
              >
                <DropdownMenu.Trigger
                  onClick={handleMouseEnterMembers}
                  onMouseEnter={handleMouseEnterMembers}
                  onMouseLeave={handleMouseLeaveMembers}
                >
                  <p>
                    Members <KeyboardArrowDownRoundedIcon />
                  </p>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
                  onMouseEnter={handleMouseEnterMembers}
                  onClick={handleMouseLeaveMembers}
                  onMouseLeave={handleMouseLeaveMembers}
                >
                  <DropdownMenu.Item
                    key="1"
                    className="hover:bg-red-600 hover:text-white"
                  >
                    <Link to="products-niveocare">Partners</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    key="2"
                    className="hover:bg-red-600 hover:text-white "
                  >
                    <Link to="products-niveoschool">Institutions</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    key="3"
                    className="hover:bg-red-600 hover:text-white"
                  >
                    <Link to="products-niveogym">Join Us</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    key="4"
                    className="hover:bg-red-600 hover:text-white"
                  >
                    <Link to="products-niveoreg">Online Application</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </NavLink>
            <NavLink
              to="/activites"
              className={({ isActive }) =>
                isActive
                  ? "text-[#007A33] text-xl font-bold  p-1 rounded-lg capitalize"
                  : "text-black text-xl hover:text-[#C8102E] font-bold p-1 capitalize"
              }
            >
              <DropdownMenu.Root open={mediaOpen} onOpenChange={setMediaOpen}>
                <DropdownMenu.Trigger
                  onClick={handleMouseEnterMedia}
                  onMouseEnter={handleMouseEnterMedia}
                  onMouseLeave={handleMouseLeaveMedia}
                >
                  <p>
                    Media <KeyboardArrowDownRoundedIcon />
                  </p>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
                  onMouseEnter={handleMouseEnterMedia}
                  onClick={handleMouseLeaveMedia}
                  onMouseLeave={handleMouseLeaveMedia}
                >
                  <DropdownMenu.Item
                    key="1"
                    className="hover:bg-red-600 hover:text-white "
                  >
                    <Link to="products-niveocare">Gallery</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    key="2"
                    className="hover:bg-red-600 hover:text-white"
                  >
                    <Link to="products-niveoschool">Events</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    key="3"
                    className="hover:bg-red-600 hover:text-white"
                  >
                    <Link to="products-niveogym">Resources</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </NavLink>

            <NavLink
              to="/soutenir"
              className={({ isActive }) =>
                isActive
                  ? "text-[#007A33] text-xl font-bold   p-1 rounded-lg capitalize"
                  : "text-black] text-xl hover:text-[#C8102E] font-bold p-1 capitalize"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/nous-joindre"
              className={({ isActive }) =>
                isActive
                  ? "text-[#007A33] text-xl font-bold   p-1 rounded-lg capitalize"
                  : "text-black text-xl hover:text-[#C8102E] font-bold p-1 capitalize"
              }
            >
              Trustees
            </NavLink>

            <NavLink
              to="/faire-un-don"
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

        <div className="lg:hidden z-50 flex">
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
                <Link
                  to=""
                  className="text-[#C8102E] hover:text-[#25554D] font-bold text-sm"
                >
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
                          to="products-niveocare"
                          onClick={handleMouseLeaveMobileMembers}
                        >
                          Partners
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item key="2">
                        <Link
                          to="products-niveoschool"
                          onClick={handleMouseLeaveMobileMembers}
                        >
                          Institutions
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item key="3">
                        <Link
                          to="products-niveogym"
                          onClick={handleMouseLeaveMobileMembers}
                        >
                          Join Us
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item key="4">
                        <Link
                          to="products-niveoreg"
                          onClick={handleMouseLeaveMobileMembers}
                        >
                          Online Application
                        </Link>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </Link>
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
                          to="products-niveocare"
                          onClick={handleMouseLeaveMobileMedia}
                        >
                          Gallery
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item key="2">
                        <Link
                          to="products-niveoschool"
                          onClick={handleMouseLeaveMobileMedia}
                        >
                          Events
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item key="3">
                        <Link
                          to="products-niveogym"
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
                  to="/nous-joindre"
                  className="text-[#C8102E] hover:text-[#25554D] font-bold text-sm"
                >
                  About
                </Link>
              </DropdownMenu.Item>
              <div className="border w-[100%] border-[#25554D] opacity-100"></div>
              <DropdownMenu.Item>
                <Link
                  to="/faire-un-don"
                  className="text-[#C8102E] hover:text-[#25554D] font-bold text-sm"
                >
                  Trustees
                </Link>
              </DropdownMenu.Item>
              <div className="border w-[100%] border-[#25554D] opacity-100"></div>
              <DropdownMenu.Item>
                <Link
                  to="/faire-un-don"
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