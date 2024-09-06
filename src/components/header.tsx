import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/images/logo/Logo UCAM1.png";

import MenuIcon from "@mui/icons-material/Menu";
import Image from "../components/image/image";
import { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Header() {
  //const [lang, setLang] = useState("En");

  const [membersOpen, setMembersOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [opportunities, setOpportunities] = useState(false);

  const handleMouseEnterOpportunities = () => {
    setOpportunities(true);
  };
  const handleMouseLeaveOpportunities = () => {
    setOpportunities(false);
  };
  const handleMobileClose = () => {
    setMobile(false);
  };
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

  return (
    <>
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
                    ? "text-[#007A33] text-lg font-bold  p-1 rounded-lg capitalize"
                    : "text-black text-lg hover:text-[#C8102E] font-bold p-1 capitalize"
                }
              >
                Home
              </NavLink>

              <div className="text-black text-lg hover:cursor-pointer hover:text-[#C8102E] font-bold p-1 capitalize">
                <DropdownMenu.Root
                  open={membersOpen}
                  onOpenChange={setMembersOpen}
                >
                  <DropdownMenu.Trigger
                    onMouseEnter={handleMouseEnterMembers}
                    onClick={handleMouseEnterMembers}
                  >
                    <p>
                      Members <KeyboardArrowDownRoundedIcon />
                    </p>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      onClick={handleMouseLeaveMembers}
                      onMouseLeave={handleMouseLeaveMembers}
                      className="DropdownMenuContent bg-white border-0  p-5 rounded-md"
                    >
                      <DropdownMenu.Item
                        key="1"
                        className="hover:text-red-600 font-semibold pt-2"
                      >
                        <Link to="partners">Partners</Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        key="2"
                        className=" hover:text-red-600 font-semibold pt-2 "
                      >
                        <Link to="institutions">Institutions</Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        key="3"
                        className="hover:text-red-600 font-semibold pt-2"
                      >
                        <Link to="join-us">Join Us</Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        key="4"
                        className="hover:text-red-600 font-semibold pt-2"
                      >
                        <Link to="online-application">Online Application</Link>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>
              <div className="text-black text-lg hover:text-[#C8102E] font-bold p-1 capitalize">
                <DropdownMenu.Root open={mediaOpen} onOpenChange={setMediaOpen}>
                  <DropdownMenu.Trigger
                    onClick={handleMouseEnterMedia}
                    onMouseEnter={handleMouseEnterMedia}
                  >
                    <p>
                      Media <KeyboardArrowDownRoundedIcon />
                    </p>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      onMouseLeave={handleMouseLeaveMedia}
                      onClick={handleMouseLeaveMedia}
                      className="DropdownMenuContent bg-white rounded-md p-5"
                    >
                      <DropdownMenu.Item
                        key="1"
                        className="hover:text-red-600 font-semibold pt-2"
                      >
                        <Link to="gallery">Gallery</Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        key="3"
                        className="hover:text-red-600 font-semibold pt-2"
                      >
                        <Link to="resources">Resources</Link>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#007A33] text-lg font-bold   p-1 rounded-lg capitalize"
                    : "text-black] text-lg hover:text-[#C8102E] font-bold p-1 capitalize"
                }
              >
                About
              </NavLink>

              <NavLink
                to="/trustees"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#007A33] text-lg font-bold   p-1 rounded-lg capitalize"
                    : "text-black text-lg hover:text-[#C8102E] font-bold p-1 capitalize"
                }
              >
                Trustees
              </NavLink>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#007A33] text-lg font-bold   p-1 rounded-lg capitalize"
                    : "text-black] text-lg hover:text-[#C8102E] font-bold p-1 capitalize"
                }
              >
                Events
              </NavLink>
              <div className="text-black text-lg hover:text-[#C8102E] font-bold p-1 capitalize outline-none">
                <DropdownMenu.Root
                  open={opportunities}
                  onOpenChange={setOpportunities}
                >
                  <DropdownMenu.Trigger
                    onClick={handleMouseEnterOpportunities}
                    onMouseEnter={handleMouseEnterOpportunities}
                  >
                    <p>
                      Opportunities <KeyboardArrowDownRoundedIcon />
                    </p>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      onMouseLeave={handleMouseLeaveOpportunities}
                      onClick={handleMouseLeaveOpportunities}
                      className="DropdownMenuContent bg-white rounded-md p-5"
                    >
                      <DropdownMenu.Item
                        key="1"
                        className="hover:text-red-600 font-semibold pt-2"
                      >
                        <Link to="/volunteer">Volunteer</Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        key="2"
                        className="hover:text-red-600 font-semibold pt-2"
                      >
                        <Link to="/internship">Internship</Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        key="3"
                        className="hover:text-red-600 font-semibold pt-2"
                      >
                        <Link to="/available-jobs">Available Jobs</Link>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#007A33] text-lg font-bold  p-1 rounded-lg capitalize"
                    : "text-black text-lg hover:text-[#C8102E] font-bold p-1 capitalize"
                }
              >
                Contact
              </NavLink>
              <div></div>
            </menu>
          </div>

          <div className="lg:hidden z-50 flex ">
            <DropdownMenu.Root open={mobile} onOpenChange={setMobile}>
              <DropdownMenu.Trigger asChild>
                <button className="IconButton" aria-label="Customise options">
                  <MenuIcon
                    className="text-[#25554D]"
                    style={{ fontSize: "40px" }}
                  />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="DropdownMenuContent bg-white  p-5 rounded-md"
                  sideOffset={5}
                >
                  <DropdownMenu.Item className="DropdownMenuItem">
                    <Link
                      to="/"
                      className="text-black hover:text-[#25554D] font-normal text-md"
                      onClick={handleMobileClose}
                    >
                      Home
                    </Link>
                  </DropdownMenu.Item>
                  <div className="border w-[100%] border-red-800  opacity-80"></div>
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                      <p className="text-black  hover:text-[#25554D] font-normal text-md">
                        Members <KeyboardArrowDownRoundedIcon />
                      </p>
                    </DropdownMenu.SubTrigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.SubContent
                        className="DropdownMenuSubContent bg-white p-5 rounded-md"
                        sideOffset={2}
                        alignOffset={-5}
                      >
                        <DropdownMenu.Item className="DropdownMenuItem">
                          <Link
                            to="partners"
                            onClick={handleMobileClose}
                            className="text-black  hover:text-[#25554D] font-normal text-md"
                          >
                            Partners
                          </Link>
                        </DropdownMenu.Item>
                        <div className="border w-[100%] border-red-800  opacity-80"></div>
                        <DropdownMenu.Item className="DropdownMenuItem">
                          <Link
                            to="institutions"
                            onClick={handleMobileClose}
                            className="text-black  hover:text-[#25554D] font-normal text-md"
                          >
                            Institutions
                          </Link>
                        </DropdownMenu.Item>
                        <div className="border w-[100%] border-red-800  opacity-80"></div>
                        <DropdownMenu.Item className="DropdownMenuItem">
                          <Link
                            to="join-us"
                            onClick={handleMobileClose}
                            className="text-black  hover:text-[#25554D] font-normal text-md"
                          >
                            Join Us
                          </Link>
                        </DropdownMenu.Item>
                        <div className="border w-[100%] border-red-800  opacity-80"></div>
                        <DropdownMenu.Item className="DropdownMenuItem">
                          <Link
                            to="online-application"
                            onClick={handleMobileClose}
                            className="text-black  hover:text-[#25554D] font-normal text-md"
                          >
                            Online Application
                          </Link>
                        </DropdownMenu.Item>
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Sub>
                  <div className="border w-[100%] border-red-800  opacity-80"></div>
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                      <p className="text-black  hover:text-[#25554D] font-normal text-md">
                        Media <KeyboardArrowDownRoundedIcon />
                      </p>
                    </DropdownMenu.SubTrigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.SubContent
                        className="DropdownMenuSubContent  bg-white p-5 rounded-md"
                        sideOffset={2}
                        alignOffset={-5}
                      >
                        <DropdownMenu.Item className="DropdownMenuItem">
                          <Link
                            to="gallery"
                            onClick={handleMobileClose}
                            className="text-black  hover:text-[#25554D] font-normal text-md"
                          >
                            Gallery
                          </Link>
                        </DropdownMenu.Item>

                        <div className="border w-[100%] border-red-800  opacity-80"></div>
                        <DropdownMenu.Item className="DropdownMenuItem">
                          <Link
                            to="resources"
                            onClick={handleMobileClose}
                            className="text-black  hover:text-[#25554D] font-normal text-md"
                          >
                            Resources
                          </Link>
                        </DropdownMenu.Item>
                        <div className="border w-[100%] border-red-800  opacity-80"></div>
                        <DropdownMenu.Item className="DropdownMenuItem">
                          <Link
                            to="online-application"
                            onClick={handleMobileClose}
                            className="text-black  hover:text-[#25554D] font-normal text-md"
                          >
                            Online Application
                          </Link>
                        </DropdownMenu.Item>
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Sub>
                  <div className="border w-[100%] border-red-800  opacity-80"></div>
                  <DropdownMenu.Item className="DropdownMenuItem">
                    <Link
                      to="about"
                      onClick={handleMobileClose}
                      className="text-black  hover:text-[#25554D] font-normal text-md"
                    >
                      About
                    </Link>
                  </DropdownMenu.Item>
                  <div className="border w-[100%] border-red-800  opacity-80"></div>
                  <DropdownMenu.Item className="DropdownMenuItem" disabled>
                    <Link
                      to="trustees"
                      onClick={handleMobileClose}
                      className="text-black  hover:text-[#25554D] font-normal text-md"
                    >
                      Trustees
                    </Link>
                  </DropdownMenu.Item>
                  <div className="border w-[100%] border-red-800  opacity-80"></div>
                  <DropdownMenu.Item className="DropdownMenuItem" disabled>
                    <Link
                      to="events"
                      onClick={handleMobileClose}
                      className="text-black  hover:text-[#25554D] font-normal text-md"
                    >
                      Events
                    </Link>
                  </DropdownMenu.Item>
                  <div className="border w-[100%] border-red-800  opacity-80"></div>
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                      <p className="text-black hover:cursor-pointer hover:text-[#25554D] font-normal text-md">
                        Opportunities <KeyboardArrowDownRoundedIcon />
                      </p>
                    </DropdownMenu.SubTrigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.SubContent
                        className="DropdownMenuSubContent  bg-white p-5 rounded-md"
                        sideOffset={2}
                        alignOffset={-5}
                      >
                        <DropdownMenu.Item
                          key="1"
                          className="hover:text-red-600 font-semibold pt-2"
                        >
                          <Link to="/volunteer" onClick={handleMobileClose}>
                            Volunteer
                          </Link>
                        </DropdownMenu.Item>

                        <div className="border w-[100%] border-red-800  opacity-80"></div>
                        <DropdownMenu.Item
                          key="2"
                          className="hover:text-red-600 font-semibold pt-2"
                        >
                          <Link to="/internship" onClick={handleMobileClose}>
                            Internship
                          </Link>
                        </DropdownMenu.Item>
                        <div className="border w-[100%] border-red-800  opacity-80"></div>
                        <DropdownMenu.Item
                          key="3"
                          className="hover:text-red-600 font-semibold pt-2"
                        >
                          <Link
                            to="/available-jobs"
                            onClick={handleMobileClose}
                          >
                            Available Jobs
                          </Link>
                        </DropdownMenu.Item>
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Sub>
                  <div className="border w-[100%] border-red-800  opacity-80"></div>
                  <DropdownMenu.Item className="DropdownMenuItem" disabled>
                    <Link
                      to="contact"
                      onClick={handleMobileClose}
                      className="text-black  hover:text-[#25554D] font-normal text-md"
                    >
                      Contact
                    </Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </nav>

      </header>
    </>
  );
}
