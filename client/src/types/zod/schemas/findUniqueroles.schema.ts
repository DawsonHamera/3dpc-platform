import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { rolesSelectObjectSchema as rolesSelectObjectSchema } from './objects/rolesSelect.schema';
import { rolesIncludeObjectSchema as rolesIncludeObjectSchema } from './objects/rolesInclude.schema';
import { rolesWhereUniqueInputObjectSchema as rolesWhereUniqueInputObjectSchema } from './objects/rolesWhereUniqueInput.schema';

export const rolesFindUniqueSchema: z.ZodType<Prisma.rolesFindUniqueArgs> = z.object({ select: rolesSelectObjectSchema.optional(), include: rolesIncludeObjectSchema.optional(), where: rolesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.rolesFindUniqueArgs>;

export const rolesFindUniqueZodSchema = z.object({ select: rolesSelectObjectSchema.optional(), include: rolesIncludeObjectSchema.optional(), where: rolesWhereUniqueInputObjectSchema }).strict();