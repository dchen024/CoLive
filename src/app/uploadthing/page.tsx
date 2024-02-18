import { currentUser } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";

import { DropzoneButton } from "@/components/ui/dropzoneButton";

export default async function Page() {
  const user = await currentUser();

  if (!user) return <div>Not logged in</div>;

  return (
    <div className="flex min-h-screen flex-col items-center min-w-screen overflow-hidden">
      <div className="flex flex-col h-screen items-center w-[380px]">
        <NavBar />
        <DropzoneButton user={JSON.parse(JSON.stringify(user))} />
      </div>
    </div>
  );
}
