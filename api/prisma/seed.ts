import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

type SectionItem = {
  product_id: number;
  variant_id: number;
};

type SectionSeedInput = {
  name: string;
  type: string;
  display_order: number;
  items: SectionItem[];
};

function uniqueSectionItems(items: SectionItem[]): SectionItem[] {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = `${item.product_id}-${item.variant_id}`;
    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function buildSectionsForType(type: 'general' | 'teachers', items: SectionItem[]) {
  const names =
    type === 'teachers'
      ? [
          'Classroom Essentials',
          'STEM Demonstrators',
          'Teacher Favorites',
          'Lesson Ready Prints',
        ]
      : ['Featured Prints', 'Everyday Essentials', 'New Arrivals', 'Staff Picks'];

  const featured = items.slice(0, 6);
  const alternating = items.filter((_, index) => index % 2 === 0).slice(0, 8);
  const newest = [...items].reverse().slice(0, 6);
  const complementary = items.filter((_, index) => index % 2 !== 0).slice(0, 8);

  const sectionItems = [featured, alternating, newest, complementary].map(
    (sectionItemsForSlot) =>
      uniqueSectionItems(
        sectionItemsForSlot.length > 0 ? sectionItemsForSlot : items.slice(0, 6),
      ),
  );

  return names.map<SectionSeedInput>((name, display_order) => ({
    name,
    type,
    display_order,
    items: sectionItems[display_order] ?? [],
  }));
}

async function reseedShopSections(): Promise<void> {
  const products = await prisma.product.findMany({
    include: {
      variants: {
        select: { id: true },
        orderBy: { id: 'asc' },
      },
    },
    orderBy: { id: 'asc' },
  });

  const generalItems: SectionItem[] = [];
  const teacherItems: SectionItem[] = [];

  for (const product of products) {
    const primaryVariant = product.variants[0];

    if (!primaryVariant) {
      continue;
    }

    const item = {
      product_id: product.id,
      variant_id: primaryVariant.id,
    };

    if (product.type === 'teachers') {
      teacherItems.push(item);
    } else {
      generalItems.push(item);
    }
  }

  const sectionSeedData = [
    ...buildSectionsForType('general', generalItems),
    ...buildSectionsForType('teachers', teacherItems),
  ];

  await prisma.$transaction(async (tx) => {
    // Reset only sections to preserve existing products, variants, and image files.
    await tx.section.deleteMany();

    await tx.section.createMany({
      data: sectionSeedData,
    });
  });
}

async function main() {
  const args = new Set(process.argv.slice(2));
  // Explicit section reseed controls:
  // - npm run seed:sections => --sections-only (reset/reseed sections and exit)
  // - npx ts-node prisma/seed.ts --reseed-sections (reset/reseed sections + continue full seed)
  const sectionsOnly = args.has('--sections-only');
  const reseedSections = sectionsOnly || args.has('--reseed-sections');

  if (reseedSections) {
    // Explicit opt-in reset/reseed for mock shop sections only.
    console.log('Reseeding shop sections...');
    await reseedShopSections();
  } else {
    console.log(
      'Skipping shop section reseed. Pass --sections-only or --reseed-sections to enable it.',
    );
  }

  if (sectionsOnly) {
    return;
  }

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
