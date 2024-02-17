import React from "react";
import { SignOutButton } from "@clerk/nextjs";
import Typeform from "@/app/pages/typeform";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-between p-24">
        <h1>Hello World!</h1>
        <Typeform />
      </div>
      <SignOutButton />
    </div>
  );
};

export default page;
