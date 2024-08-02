import { PrismaClient } from "@prisma/client";
import { __IS_DEV__ } from "./const";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const dbClient = globalForPrisma.prisma || new PrismaClient();
// export const dbClient = new PrismaClient();

if (__IS_DEV__) globalForPrisma.prisma = dbClient;

export default dbClient;
