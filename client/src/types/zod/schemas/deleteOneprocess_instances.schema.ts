import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_instancesSelectObjectSchema as process_instancesSelectObjectSchema } from './objects/process_instancesSelect.schema';
import { process_instancesIncludeObjectSchema as process_instancesIncludeObjectSchema } from './objects/process_instancesInclude.schema';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './objects/process_instancesWhereUniqueInput.schema';

export const process_instancesDeleteOneSchema: z.ZodType<Prisma.process_instancesDeleteArgs> = z.object({ select: process_instancesSelectObjectSchema.optional(), include: process_instancesIncludeObjectSchema.optional(), where: process_instancesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.process_instancesDeleteArgs>;

export const process_instancesDeleteOneZodSchema = z.object({ select: process_instancesSelectObjectSchema.optional(), include: process_instancesIncludeObjectSchema.optional(), where: process_instancesWhereUniqueInputObjectSchema }).strict();