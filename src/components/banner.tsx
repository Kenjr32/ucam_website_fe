"use client";

import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <Banner>
      <div className="flex w-full justify-between border-b border-gray-200 bg-green-600 p-4 h-24 ">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-white dark:text-white">
            <MdAnnouncement className="mr-4 h-4 w-4" />
            <span className="[&_p]:inline text-xl">
              Join us for upcoming fundraising trainings!&nbsp;
             <Link
                    to="events"
                   
                className="px-2 inline font-bold text-white underline decoration-solid underline-offset-2 hover:no-underline "
              >
                 Check Out Events
              </Link>
            </span>
          </p>
        </div>
        <Banner.CollapseButton
          color="gray"
          className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
        >
          <HiX className="h-8 w-8" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  );
}
