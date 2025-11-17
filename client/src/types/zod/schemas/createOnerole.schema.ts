import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { roleSelectObjectSchema as roleSelectObjectSchema } from './objects/roleSelect.schema';
import { roleIncludeObjectSchema as roleIncludeObjectSchema } from './objects/roleInclude.schema';
import { roleCreateInputObjectSchema as roleCreateInputObjectSchema } from './objects/roleCreateInput.schema';
import { roleUncheckedCreateInputObjectSchema as roleUncheckedCreateInputObjectSchema } from './objects/roleUncheckedCreateInput.schema';

export const roleCreateOneSchema: z.ZodType<Prisma.roleCreateArgs> = z.object({ select: roleSelectObjectSchema.optional(), include: roleIncludeObjectSchema.optional(), data: z.union([roleCreateInputObjectSchema, roleUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.roleCreateArgs>;

export const roleCreateOneZodSchema = z.object({ select: roleSelectObjectSchema.optional(), include: roleIncludeObjectSchema.optional(), data: z.union([roleCreateInputObjectSchema, roleUncheckedCreateInputObjectSchema]) }).strict();