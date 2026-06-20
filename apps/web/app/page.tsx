import React from "react";
import { prisma } from "@repo/db/prisma";

const page = async () => {
  const user = await prisma.user.findFirst();
  return (
    <div>
      {user?.password}
      {user?.username}
    </div>
  );
};

export default page;
