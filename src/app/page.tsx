import Image from "next/image";
import { UserButton, SignOutButton } from "@clerk/nextjs";
import { createClient } from "@/utils/supabase/client";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <UserButton />
    </main>
  );
}
