import Image from "next/image";
import { UserButton, SignOutButton } from "@clerk/nextjs";
import Typeform from "@/app/typeform/typeform";
import { User } from "@clerk/nextjs/server";
import { currentUser } from '@clerk/nextjs';
import { createClient } from "@/utils/supabase/client";

export default async function Home() {
  const user = await currentUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello {user?.id ?? "N/A"}</h1>
      <Typeform user={JSON.parse(JSON.stringify(user))} />
      <UserButton />
    </main>
  );
}
