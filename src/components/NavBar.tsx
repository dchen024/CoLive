"use client";

import Image from "next/image";
import ProfileIcon from "../../public/assets/profileIcon.svg";
import HomeIcon from "../../public/assets/homeIcon.svg";
import Link from "next/link";
import { UserButton } from "@clerk/clerk-react";

function NavBar() {
  return (
    <>
      <div className="flex flex-row place-content-between w-[380px]">
        {/* <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
          <Image src={MessageIcon} alt="Message Icon" width={48} height={48} />
        </div> */}

        <Link href="/">
          <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
            <Image src={HomeIcon} alt="Home Icon" width={48} height={48} />
          </div>
        </Link>

        <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
          {/* <Image src={ProfileIcon} alt="Profile Icon" width={48} height={48} /> */}
          <UserButton />
        </div>
      </div>
    </>
  );
}

export default NavBar;
