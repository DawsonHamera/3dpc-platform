import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { usersSelectObjectSchema as usersSelectObjectSchema } from './objects/usersSelect.schema';
import { usersIncludeObjectSchema as usersIncludeObjectSchema } from './objects/usersInclude.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './objects/usersWhereUniqueInput.schema';
import { usersCreateInputObjectSchema as usersCreateInputObjectSchema } from './objects/usersCreateInput.schema';
import { usersUncheckedCreateInputObjectSchema as usersUncheckedCreateInputObjectSchema } from './objects/usersUncheckedCreateInput.schema';
import { usersUpdateInputObjectSchema as usersUpdateInputObjectSchema } from './objects/usersUpdateInput.schema';
import { usersUncheckedUpdateInputObjectSchema as usersUncheckedUpdateInputObjectSchema } from './objects/usersUncheckedUpdateInput.schema';

export const usersUpsertOneSchema: z.ZodType<Prisma.usersUpsertArgs> = z.object({ select: usersSelectObjectSchema.optional(), include: usersIncludeObjectSchema.optional(), where: usersWhereUniqueInputObjectSchema, create: z.union([ usersCreateInputObjectSchema, usersUncheckedCreateInputObjectSchema ]), update: z.union([ usersUpdateInputObjectSchema, usersUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.usersUpsertArgs>;

export const usersUpsertOneZodSchema = z.object({ select: usersSelectObjectSchema.optional(), include: usersIncludeObjectSchema.optional(), where: usersWhereUniqueInputObjectSchema, create: z.union([ usersCreateInputObjectSchema, usersUncheckedCreateInputObjectSchema ]), update: z.union([ usersUpdateInputObjectSchema, usersUncheckedUpdateInputObjectSchema ]) }).strict();