import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_instancesSelectObjectSchema as process_instancesSelectObjectSchema } from './objects/process_instancesSelect.schema';
import { process_instancesIncludeObjectSchema as process_instancesIncludeObjectSchema } from './objects/process_instancesInclude.schema';
import { process_instancesUpdateInputObjectSchema as process_instancesUpdateInputObjectSchema } from './objects/process_instancesUpdateInput.schema';
import { process_instancesUncheckedUpdateInputObjectSchema as process_instancesUncheckedUpdateInputObjectSchema } from './objects/process_instancesUncheckedUpdateInput.schema';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './objects/process_instancesWhereUniqueInput.schema';

export const process_instancesUpdateOneSchema: z.ZodType<Prisma.process_instancesUpdateArgs> = z.object({ select: process_instancesSelectObjectSchema.optional(), include: process_instancesIncludeObjectSchema.optional(), data: z.union([process_instancesUpdateInputObjectSchema, process_instancesUncheckedUpdateInputObjectSchema]), where: process_instancesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.process_instancesUpdateArgs>;

export const process_instancesUpdateOneZodSchema = z.object({ select: process_instancesSelectObjectSchema.optional(), include: process_instancesIncludeObjectSchema.optional(), data: z.union([process_instancesUpdateInputObjectSchema, process_instancesUncheckedUpdateInputObjectSchema]), where: process_instancesWhereUniqueInputObjectSchema }).strict();