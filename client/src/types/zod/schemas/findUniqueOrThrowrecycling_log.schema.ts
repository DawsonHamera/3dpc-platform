import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { recycling_logSelectObjectSchema as recycling_logSelectObjectSchema } from './objects/recycling_logSelect.schema';
import { recycling_logIncludeObjectSchema as recycling_logIncludeObjectSchema } from './objects/recycling_logInclude.schema';
import { recycling_logWhereUniqueInputObjectSchema as recycling_logWhereUniqueInputObjectSchema } from './objects/recycling_logWhereUniqueInput.schema';

export const recycling_logFindUniqueOrThrowSchema: z.ZodType<Prisma.recycling_logFindUniqueOrThrowArgs> = z.object({ select: recycling_logSelectObjectSchema.optional(), include: recycling_logIncludeObjectSchema.optional(), where: recycling_logWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.recycling_logFindUniqueOrThrowArgs>;

export const recycling_logFindUniqueOrThrowZodSchema = z.object({ select: recycling_logSelectObjectSchema.optional(), include: recycling_logIncludeObjectSchema.optional(), where: recycling_logWhereUniqueInputObjectSchema }).strict();