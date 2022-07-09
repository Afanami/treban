import { PrismaClient } from "@prisma/client";

// dont create new instance of Prisma client whenever Next.js fast refreshes
let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export default prisma;
