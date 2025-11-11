import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_instancesSelectObjectSchema as process_instancesSelectObjectSchema } from './objects/process_instancesSelect.schema';
import { process_instancesIncludeObjectSchema as process_instancesIncludeObjectSchema } from './objects/process_instancesInclude.schema';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './objects/process_instancesWhereUniqueInput.schema';
import { process_instancesCreateInputObjectSchema as process_instancesCreateInputObjectSchema } from './objects/process_instancesCreateInput.schema';
import { process_instancesUncheckedCreateInputObjectSchema as process_instancesUncheckedCreateInputObjectSchema } from './objects/process_instancesUncheckedCreateInput.schema';
import { process_instancesUpdateInputObjectSchema as process_instancesUpdateInputObjectSchema } from './objects/process_instancesUpdateInput.schema';
import { process_instancesUncheckedUpdateInputObjectSchema as process_instancesUncheckedUpdateInputObjectSchema } from './objects/process_instancesUncheckedUpdateInput.schema';

export const process_instancesUpsertOneSchema: z.ZodType<Prisma.process_instancesUpsertArgs> = z.object({ select: process_instancesSelectObjectSchema.optional(), include: process_instancesIncludeObjectSchema.optional(), where: process_instancesWhereUniqueInputObjectSchema, create: z.union([ process_instancesCreateInputObjectSchema, process_instancesUncheckedCreateInputObjectSchema ]), update: z.union([ process_instancesUpdateInputObjectSchema, process_instancesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.process_instancesUpsertArgs>;

export const process_instancesUpsertOneZodSchema = z.object({ select: process_instancesSelectObjectSchema.optional(), include: process_instancesIncludeObjectSchema.optional(), where: process_instancesWhereUniqueInputObjectSchema, create: z.union([ process_instancesCreateInputObjectSchema, process_instancesUncheckedCreateInputObjectSchema ]), update: z.union([ process_instancesUpdateInputObjectSchema, process_instancesUncheckedUpdateInputObjectSchema ]) }).strict();