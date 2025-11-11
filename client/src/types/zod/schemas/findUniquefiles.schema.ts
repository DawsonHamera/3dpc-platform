import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { filesSelectObjectSchema as filesSelectObjectSchema } from './objects/filesSelect.schema';
import { filesIncludeObjectSchema as filesIncludeObjectSchema } from './objects/filesInclude.schema';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './objects/filesWhereUniqueInput.schema';

export const filesFindUniqueSchema: z.ZodType<Prisma.filesFindUniqueArgs> = z.object({ select: filesSelectObjectSchema.optional(), include: filesIncludeObjectSchema.optional(), where: filesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.filesFindUniqueArgs>;

export const filesFindUniqueZodSchema = z.object({ select: filesSelectObjectSchema.optional(), include: filesIncludeObjectSchema.optional(), where: filesWhereUniqueInputObjectSchema }).strict();