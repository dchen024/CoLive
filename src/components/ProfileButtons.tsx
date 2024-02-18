import Image from "next/image";
import Like from "../../public/assets/like.svg";
import Back from "../../public/assets/back.svg";
import Reject from "../../public/assets/reject.svg";

function ProfileButtons() {
  return (
    <>
      <div className="flex flex-row place-content-evenly w-[380px]">
        <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
          <Image src={Reject} alt="Message Icon" width={64} height={64} />
        </div>
        <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
          <Image src={Back} alt="Tinder Icon" width={64} height={64} />
        </div>
        <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
          <Image src={Like} alt="Profile Icon" width={64} height={64} />
        </div>
      </div>
    </>
  );
}

export default ProfileButtons;
