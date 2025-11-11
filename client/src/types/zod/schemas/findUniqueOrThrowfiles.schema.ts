import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { filesSelectObjectSchema as filesSelectObjectSchema } from './objects/filesSelect.schema';
import { filesIncludeObjectSchema as filesIncludeObjectSchema } from './objects/filesInclude.schema';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './objects/filesWhereUniqueInput.schema';

export const filesFindUniqueOrThrowSchema: z.ZodType<Prisma.filesFindUniqueOrThrowArgs> = z.object({ select: filesSelectObjectSchema.optional(), include: filesIncludeObjectSchema.optional(), where: filesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.filesFindUniqueOrThrowArgs>;

export const filesFindUniqueOrThrowZodSchema = z.object({ select: filesSelectObjectSchema.optional(), include: filesIncludeObjectSchema.optional(), where: filesWhereUniqueInputObjectSchema }).strict();