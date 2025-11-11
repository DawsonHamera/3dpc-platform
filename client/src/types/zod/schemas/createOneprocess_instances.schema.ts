import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_instancesSelectObjectSchema as process_instancesSelectObjectSchema } from './objects/process_instancesSelect.schema';
import { process_instancesIncludeObjectSchema as process_instancesIncludeObjectSchema } from './objects/process_instancesInclude.schema';
import { process_instancesCreateInputObjectSchema as process_instancesCreateInputObjectSchema } from './objects/process_instancesCreateInput.schema';
import { process_instancesUncheckedCreateInputObjectSchema as process_instancesUncheckedCreateInputObjectSchema } from './objects/process_instancesUncheckedCreateInput.schema';

export const process_instancesCreateOneSchema: z.ZodType<Prisma.process_instancesCreateArgs> = z.object({ select: process_instancesSelectObjectSchema.optional(), include: process_instancesIncludeObjectSchema.optional(), data: z.union([process_instancesCreateInputObjectSchema, process_instancesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.process_instancesCreateArgs>;

export const process_instancesCreateOneZodSchema = z.object({ select: process_instancesSelectObjectSchema.optional(), include: process_instancesIncludeObjectSchema.optional(), data: z.union([process_instancesCreateInputObjectSchema, process_instancesUncheckedCreateInputObjectSchema]) }).strict();