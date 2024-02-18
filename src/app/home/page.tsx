import React from "react";
import ProfileCard from "../../components/ProfileCard";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center min-w-screen overflow-hidden">
      <div className="flex flex-col items-center w-[380px] h-screen">
        <ProfileCard />
      </div>
    </main>
  );
};

export default page;
