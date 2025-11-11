import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { error_reportsSelectObjectSchema as error_reportsSelectObjectSchema } from './objects/error_reportsSelect.schema';
import { error_reportsIncludeObjectSchema as error_reportsIncludeObjectSchema } from './objects/error_reportsInclude.schema';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './objects/error_reportsWhereUniqueInput.schema';

export const error_reportsFindUniqueOrThrowSchema: z.ZodType<Prisma.error_reportsFindUniqueOrThrowArgs> = z.object({ select: error_reportsSelectObjectSchema.optional(), include: error_reportsIncludeObjectSchema.optional(), where: error_reportsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.error_reportsFindUniqueOrThrowArgs>;

export const error_reportsFindUniqueOrThrowZodSchema = z.object({ select: error_reportsSelectObjectSchema.optional(), include: error_reportsIncludeObjectSchema.optional(), where: error_reportsWhereUniqueInputObjectSchema }).strict();