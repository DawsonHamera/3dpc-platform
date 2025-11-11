import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { rolesSelectObjectSchema as rolesSelectObjectSchema } from './objects/rolesSelect.schema';
import { rolesIncludeObjectSchema as rolesIncludeObjectSchema } from './objects/rolesInclude.schema';
import { rolesCreateInputObjectSchema as rolesCreateInputObjectSchema } from './objects/rolesCreateInput.schema';
import { rolesUncheckedCreateInputObjectSchema as rolesUncheckedCreateInputObjectSchema } from './objects/rolesUncheckedCreateInput.schema';

export const rolesCreateOneSchema: z.ZodType<Prisma.rolesCreateArgs> = z.object({ select: rolesSelectObjectSchema.optional(), include: rolesIncludeObjectSchema.optional(), data: z.union([rolesCreateInputObjectSchema, rolesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.rolesCreateArgs>;

export const rolesCreateOneZodSchema = z.object({ select: rolesSelectObjectSchema.optional(), include: rolesIncludeObjectSchema.optional(), data: z.union([rolesCreateInputObjectSchema, rolesUncheckedCreateInputObjectSchema]) }).strict();