import { PrismaClient, Role } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
    const adminPassword = await bcrypt.hash("Admin123!", 10)
    const userPassword = await bcrypt.hash("User123!", 10)

    // Admin Kullanıcısı
    const admin = await prisma.user.upsert({
        where: { email: "admin@vibe.com" },
        update: {},
        create: {
            email: "admin@vibe.com",
            name: "Admin User",
            password: adminPassword,
            role: Role.ADMIN,
        },
    })

    // Standart Kullanıcı
    const user = await prisma.user.upsert({
        where: { email: "user@vibe.com" },
        update: {},
        create: {
            email: "user@vibe.com",
            name: "Standard User",
            password: userPassword,
            role: Role.USER,
        },
    })

    console.log({ admin, user })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
