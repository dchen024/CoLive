"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { UserButton, SignOutButton } from "@clerk/nextjs";
import Typeform from "@/app/typeform/typeform";
import { currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    const me = await currentUser();
    setUser(me);
  };


  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello {user?.id}</h1>
      <Typeform />
      <UserButton />
    </main>
  );
}
