import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { usersSelectObjectSchema as usersSelectObjectSchema } from './objects/usersSelect.schema';
import { usersIncludeObjectSchema as usersIncludeObjectSchema } from './objects/usersInclude.schema';
import { usersUpdateInputObjectSchema as usersUpdateInputObjectSchema } from './objects/usersUpdateInput.schema';
import { usersUncheckedUpdateInputObjectSchema as usersUncheckedUpdateInputObjectSchema } from './objects/usersUncheckedUpdateInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './objects/usersWhereUniqueInput.schema';

export const usersUpdateOneSchema: z.ZodType<Prisma.usersUpdateArgs> = z.object({ select: usersSelectObjectSchema.optional(), include: usersIncludeObjectSchema.optional(), data: z.union([usersUpdateInputObjectSchema, usersUncheckedUpdateInputObjectSchema]), where: usersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.usersUpdateArgs>;

export const usersUpdateOneZodSchema = z.object({ select: usersSelectObjectSchema.optional(), include: usersIncludeObjectSchema.optional(), data: z.union([usersUpdateInputObjectSchema, usersUncheckedUpdateInputObjectSchema]), where: usersWhereUniqueInputObjectSchema }).strict();