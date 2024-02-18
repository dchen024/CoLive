import { currentUser } from '@clerk/nextjs';

import {DropzoneButton}  from "@/components/ui/dropzoneButton"

export default async function Page() {
  const user = await currentUser();
 
  if (!user) return <div>Not logged in</div>;
 
  return (
    <div>
      <DropzoneButton user={JSON.parse(JSON.stringify(user))}/>
    </div>
  )
}