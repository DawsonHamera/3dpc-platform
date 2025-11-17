"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const userCount = await prisma.user.count();
    if (userCount === 0) {
        await prisma.role.createMany({
            data: [
                {
                    name: 'viewer',
                    description: 'Can view content',
                },
                {
                    name: 'member',
                    description: 'Can view and participate in content',
                },
                {
                    name: 'admin',
                    description: 'Full access to the system',
                },
                {
                    name: 'developer',
                    description: 'Can manage and deploy system updates',
                },
            ],
        });
        await prisma.user.create({
            data: {
                name: 'Admin User',
                email: 'admin@example.com',
                password_hash: '$2y$10$gIyE5T./wbxFkadHiDyYnu7thjYuEdXUC0glRU5r2Hc327GYwdg5O',
                role: {
                    connect: { id: 3 },
                },
            },
        });
    }
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map