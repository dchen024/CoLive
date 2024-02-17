import Image from "next/image";
import MessageIcon from "../../public/assets/messageIcon.svg";
import ProfileIcon from "../../public/assets/profileIcon.svg";
import HomeIcon from "../../public/assets/homeIcon.svg";

function ProfileNavBar() {
  return (
    <>
      <div className="flex flex-row place-content-between w-[380px]">
        <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
          <Image src={MessageIcon} alt="Message Icon" width={48} height={48} />
        </div>
        <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
          <Image src={HomeIcon} alt="Tinder Icon" width={48} height={48} />
        </div>
        <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
          <Image src={ProfileIcon} alt="Profile Icon" width={48} height={48} />
        </div>
      </div>
    </>
  );
}

export default ProfileNavBar;
