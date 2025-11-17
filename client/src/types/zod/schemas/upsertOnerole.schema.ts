import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { roleSelectObjectSchema as roleSelectObjectSchema } from './objects/roleSelect.schema';
import { roleIncludeObjectSchema as roleIncludeObjectSchema } from './objects/roleInclude.schema';
import { roleWhereUniqueInputObjectSchema as roleWhereUniqueInputObjectSchema } from './objects/roleWhereUniqueInput.schema';
import { roleCreateInputObjectSchema as roleCreateInputObjectSchema } from './objects/roleCreateInput.schema';
import { roleUncheckedCreateInputObjectSchema as roleUncheckedCreateInputObjectSchema } from './objects/roleUncheckedCreateInput.schema';
import { roleUpdateInputObjectSchema as roleUpdateInputObjectSchema } from './objects/roleUpdateInput.schema';
import { roleUncheckedUpdateInputObjectSchema as roleUncheckedUpdateInputObjectSchema } from './objects/roleUncheckedUpdateInput.schema';

export const roleUpsertOneSchema: z.ZodType<Prisma.roleUpsertArgs> = z.object({ select: roleSelectObjectSchema.optional(), include: roleIncludeObjectSchema.optional(), where: roleWhereUniqueInputObjectSchema, create: z.union([ roleCreateInputObjectSchema, roleUncheckedCreateInputObjectSchema ]), update: z.union([ roleUpdateInputObjectSchema, roleUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.roleUpsertArgs>;

export const roleUpsertOneZodSchema = z.object({ select: roleSelectObjectSchema.optional(), include: roleIncludeObjectSchema.optional(), where: roleWhereUniqueInputObjectSchema, create: z.union([ roleCreateInputObjectSchema, roleUncheckedCreateInputObjectSchema ]), update: z.union([ roleUpdateInputObjectSchema, roleUncheckedUpdateInputObjectSchema ]) }).strict();