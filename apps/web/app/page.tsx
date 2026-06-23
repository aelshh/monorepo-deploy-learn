import React from "react";
import { prisma } from "@repo/db/prisma";

const page = async () => {
  const user = await prisma.user.findFirst();
  return (
    <div>
      Username:
      {user?.password}
      Password:
      {user?.username}
    </div>
  );
};

export default page;
