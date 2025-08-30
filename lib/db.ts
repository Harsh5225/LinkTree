import { PrismaClient } from "@prisma/client"

declare global {
  // Ensures global prisma typing is available
  var prisma: PrismaClient | undefined
}
const prisma = global.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") global.prisma = prisma
export const db = prisma
