import Typeform from "./formClient";
import { currentUser } from "@clerk/nextjs";

export default async function Page() {
  const clerkUser = await currentUser();
  const { id, firstName, lastName } = clerkUser;
  return <Typeform id={id} firstName={firstName} lastName={lastName} />;
}
