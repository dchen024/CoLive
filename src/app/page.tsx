import Image from "next/image";
import Typeform from "./pages/typeform";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center min-w-screen p-4 overflow-hidden">
      {/* <Typeform /> */}
      <div className="flex flex-col items-center w-[380px]">
        <ProfileCard />
      </div>
    </main>
  );
}
