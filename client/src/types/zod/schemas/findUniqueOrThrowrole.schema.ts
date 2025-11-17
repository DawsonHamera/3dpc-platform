import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { roleSelectObjectSchema as roleSelectObjectSchema } from './objects/roleSelect.schema';
import { roleIncludeObjectSchema as roleIncludeObjectSchema } from './objects/roleInclude.schema';
import { roleWhereUniqueInputObjectSchema as roleWhereUniqueInputObjectSchema } from './objects/roleWhereUniqueInput.schema';

export const roleFindUniqueOrThrowSchema: z.ZodType<Prisma.roleFindUniqueOrThrowArgs> = z.object({ select: roleSelectObjectSchema.optional(), include: roleIncludeObjectSchema.optional(), where: roleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.roleFindUniqueOrThrowArgs>;

export const roleFindUniqueOrThrowZodSchema = z.object({ select: roleSelectObjectSchema.optional(), include: roleIncludeObjectSchema.optional(), where: roleWhereUniqueInputObjectSchema }).strict();