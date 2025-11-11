import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { usersSelectObjectSchema as usersSelectObjectSchema } from './objects/usersSelect.schema';
import { usersIncludeObjectSchema as usersIncludeObjectSchema } from './objects/usersInclude.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './objects/usersWhereUniqueInput.schema';

export const usersFindUniqueOrThrowSchema: z.ZodType<Prisma.usersFindUniqueOrThrowArgs> = z.object({ select: usersSelectObjectSchema.optional(), include: usersIncludeObjectSchema.optional(), where: usersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.usersFindUniqueOrThrowArgs>;

export const usersFindUniqueOrThrowZodSchema = z.object({ select: usersSelectObjectSchema.optional(), include: usersIncludeObjectSchema.optional(), where: usersWhereUniqueInputObjectSchema }).strict();