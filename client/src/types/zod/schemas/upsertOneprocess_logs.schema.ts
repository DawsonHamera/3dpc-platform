import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_logsSelectObjectSchema as process_logsSelectObjectSchema } from './objects/process_logsSelect.schema';
import { process_logsIncludeObjectSchema as process_logsIncludeObjectSchema } from './objects/process_logsInclude.schema';
import { process_logsWhereUniqueInputObjectSchema as process_logsWhereUniqueInputObjectSchema } from './objects/process_logsWhereUniqueInput.schema';
import { process_logsCreateInputObjectSchema as process_logsCreateInputObjectSchema } from './objects/process_logsCreateInput.schema';
import { process_logsUncheckedCreateInputObjectSchema as process_logsUncheckedCreateInputObjectSchema } from './objects/process_logsUncheckedCreateInput.schema';
import { process_logsUpdateInputObjectSchema as process_logsUpdateInputObjectSchema } from './objects/process_logsUpdateInput.schema';
import { process_logsUncheckedUpdateInputObjectSchema as process_logsUncheckedUpdateInputObjectSchema } from './objects/process_logsUncheckedUpdateInput.schema';

export const process_logsUpsertOneSchema: z.ZodType<Prisma.process_logsUpsertArgs> = z.object({ select: process_logsSelectObjectSchema.optional(), include: process_logsIncludeObjectSchema.optional(), where: process_logsWhereUniqueInputObjectSchema, create: z.union([ process_logsCreateInputObjectSchema, process_logsUncheckedCreateInputObjectSchema ]), update: z.union([ process_logsUpdateInputObjectSchema, process_logsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.process_logsUpsertArgs>;

export const process_logsUpsertOneZodSchema = z.object({ select: process_logsSelectObjectSchema.optional(), include: process_logsIncludeObjectSchema.optional(), where: process_logsWhereUniqueInputObjectSchema, create: z.union([ process_logsCreateInputObjectSchema, process_logsUncheckedCreateInputObjectSchema ]), update: z.union([ process_logsUpdateInputObjectSchema, process_logsUncheckedUpdateInputObjectSchema ]) }).strict();