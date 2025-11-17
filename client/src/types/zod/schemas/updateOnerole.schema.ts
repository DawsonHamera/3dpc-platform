import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { roleSelectObjectSchema as roleSelectObjectSchema } from './objects/roleSelect.schema';
import { roleIncludeObjectSchema as roleIncludeObjectSchema } from './objects/roleInclude.schema';
import { roleUpdateInputObjectSchema as roleUpdateInputObjectSchema } from './objects/roleUpdateInput.schema';
import { roleUncheckedUpdateInputObjectSchema as roleUncheckedUpdateInputObjectSchema } from './objects/roleUncheckedUpdateInput.schema';
import { roleWhereUniqueInputObjectSchema as roleWhereUniqueInputObjectSchema } from './objects/roleWhereUniqueInput.schema';

export const roleUpdateOneSchema: z.ZodType<Prisma.roleUpdateArgs> = z.object({ select: roleSelectObjectSchema.optional(), include: roleIncludeObjectSchema.optional(), data: z.union([roleUpdateInputObjectSchema, roleUncheckedUpdateInputObjectSchema]), where: roleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.roleUpdateArgs>;

export const roleUpdateOneZodSchema = z.object({ select: roleSelectObjectSchema.optional(), include: roleIncludeObjectSchema.optional(), data: z.union([roleUpdateInputObjectSchema, roleUncheckedUpdateInputObjectSchema]), where: roleWhereUniqueInputObjectSchema }).strict();