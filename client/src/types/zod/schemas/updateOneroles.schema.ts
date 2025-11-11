import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { rolesSelectObjectSchema as rolesSelectObjectSchema } from './objects/rolesSelect.schema';
import { rolesIncludeObjectSchema as rolesIncludeObjectSchema } from './objects/rolesInclude.schema';
import { rolesUpdateInputObjectSchema as rolesUpdateInputObjectSchema } from './objects/rolesUpdateInput.schema';
import { rolesUncheckedUpdateInputObjectSchema as rolesUncheckedUpdateInputObjectSchema } from './objects/rolesUncheckedUpdateInput.schema';
import { rolesWhereUniqueInputObjectSchema as rolesWhereUniqueInputObjectSchema } from './objects/rolesWhereUniqueInput.schema';

export const rolesUpdateOneSchema: z.ZodType<Prisma.rolesUpdateArgs> = z.object({ select: rolesSelectObjectSchema.optional(), include: rolesIncludeObjectSchema.optional(), data: z.union([rolesUpdateInputObjectSchema, rolesUncheckedUpdateInputObjectSchema]), where: rolesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.rolesUpdateArgs>;

export const rolesUpdateOneZodSchema = z.object({ select: rolesSelectObjectSchema.optional(), include: rolesIncludeObjectSchema.optional(), data: z.union([rolesUpdateInputObjectSchema, rolesUncheckedUpdateInputObjectSchema]), where: rolesWhereUniqueInputObjectSchema }).strict();