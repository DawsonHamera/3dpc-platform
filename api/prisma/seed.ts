import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
const prisma = new PrismaClient();

async function main() {
  // Seed initial data if necessary
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
    const adminPassword = process.env.SEED_ADMIN_PASSWORD;
    if (!adminPassword) {
      throw new Error('SEED_ADMIN_PASSWORD environment variable is required');
    }
    const password_hash = await bcrypt.hash(adminPassword, 12);
    await prisma.user.create({
      data: {
        name: 'Admin User',
        email: 'admin@example.com',
        password_hash,
        role: {
          connect: { id: 3 }, // assuming role with id 3 is admin
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
