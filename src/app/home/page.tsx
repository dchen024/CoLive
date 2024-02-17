import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center min-w-screen overflow-hidden">
      <div className="flex flex-col items-center w-[380px] h-screen">
        <ProfileCard />
      </div>
    </main>
  );
}
