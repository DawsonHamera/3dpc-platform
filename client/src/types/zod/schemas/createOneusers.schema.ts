import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { usersSelectObjectSchema as usersSelectObjectSchema } from './objects/usersSelect.schema';
import { usersIncludeObjectSchema as usersIncludeObjectSchema } from './objects/usersInclude.schema';
import { usersCreateInputObjectSchema as usersCreateInputObjectSchema } from './objects/usersCreateInput.schema';
import { usersUncheckedCreateInputObjectSchema as usersUncheckedCreateInputObjectSchema } from './objects/usersUncheckedCreateInput.schema';

export const usersCreateOneSchema: z.ZodType<Prisma.usersCreateArgs> = z.object({ select: usersSelectObjectSchema.optional(), include: usersIncludeObjectSchema.optional(), data: z.union([usersCreateInputObjectSchema, usersUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.usersCreateArgs>;

export const usersCreateOneZodSchema = z.object({ select: usersSelectObjectSchema.optional(), include: usersIncludeObjectSchema.optional(), data: z.union([usersCreateInputObjectSchema, usersUncheckedCreateInputObjectSchema]) }).strict();