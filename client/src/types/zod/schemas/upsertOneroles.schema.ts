import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { rolesSelectObjectSchema as rolesSelectObjectSchema } from './objects/rolesSelect.schema';
import { rolesIncludeObjectSchema as rolesIncludeObjectSchema } from './objects/rolesInclude.schema';
import { rolesWhereUniqueInputObjectSchema as rolesWhereUniqueInputObjectSchema } from './objects/rolesWhereUniqueInput.schema';
import { rolesCreateInputObjectSchema as rolesCreateInputObjectSchema } from './objects/rolesCreateInput.schema';
import { rolesUncheckedCreateInputObjectSchema as rolesUncheckedCreateInputObjectSchema } from './objects/rolesUncheckedCreateInput.schema';
import { rolesUpdateInputObjectSchema as rolesUpdateInputObjectSchema } from './objects/rolesUpdateInput.schema';
import { rolesUncheckedUpdateInputObjectSchema as rolesUncheckedUpdateInputObjectSchema } from './objects/rolesUncheckedUpdateInput.schema';

export const rolesUpsertOneSchema: z.ZodType<Prisma.rolesUpsertArgs> = z.object({ select: rolesSelectObjectSchema.optional(), include: rolesIncludeObjectSchema.optional(), where: rolesWhereUniqueInputObjectSchema, create: z.union([ rolesCreateInputObjectSchema, rolesUncheckedCreateInputObjectSchema ]), update: z.union([ rolesUpdateInputObjectSchema, rolesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.rolesUpsertArgs>;

export const rolesUpsertOneZodSchema = z.object({ select: rolesSelectObjectSchema.optional(), include: rolesIncludeObjectSchema.optional(), where: rolesWhereUniqueInputObjectSchema, create: z.union([ rolesCreateInputObjectSchema, rolesUncheckedCreateInputObjectSchema ]), update: z.union([ rolesUpdateInputObjectSchema, rolesUncheckedUpdateInputObjectSchema ]) }).strict();