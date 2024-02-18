import React from "react";
import { SignOutButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-between p-24">
        <h1>Hello World</h1>
      </div>
      <SignOutButton />
    </div>
  );
};

export default page;
