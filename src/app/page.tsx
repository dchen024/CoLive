import Image from "next/image";
import Typeform from "./pages/typeform";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Typeform />
    </main>
  );
}
