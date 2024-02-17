"use client";

import ProfileButtons from "./ProfileButtons";
import ProfileNavBar from "./ProfileNavBar";
import ProfileImgCarousel from "./ProfileImgCarousel";
import ProfileBio from "./ProfileBio";
import { Profile } from "@/lib/Profile.utils";

const props: Profile = {
  id: 12345,
  first_name: "John",
  last_name: "Blackwood",
  gender: "male",
  user_shower_value: 5,
  user_clean_value: 7,
  user_friend_score: 8,
  user_room_time_value: 6,
  user_sleep_time: "Midnight",
  user_smoke: false,
  user_temp_value: 20,
  user_overnight_guest_value: "rarely",
  boroughs: ["Manhattan", "Brooklyn"],
};

function ProfileCard() {
  return (
    <>
      <div className="flex flex-col h-screen items-center w-[380px]">
        <ProfileNavBar />

        <ProfileImgCarousel />
        <ProfileBio {...props} />

        <ProfileButtons />
      </div>
    </>
  );
}
export default ProfileCard;
