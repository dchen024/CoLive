import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  let { data: user_responses, error } = await supabase
    .from("user_responses")
    .select();

  if (error) {
    console.error("error", error);
  }

  console.log("user_responses", user_responses);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World!</h1>
    </div>
  );
};

export default page;
