import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_logsSelectObjectSchema as process_logsSelectObjectSchema } from './objects/process_logsSelect.schema';
import { process_logsIncludeObjectSchema as process_logsIncludeObjectSchema } from './objects/process_logsInclude.schema';
import { process_logsUpdateInputObjectSchema as process_logsUpdateInputObjectSchema } from './objects/process_logsUpdateInput.schema';
import { process_logsUncheckedUpdateInputObjectSchema as process_logsUncheckedUpdateInputObjectSchema } from './objects/process_logsUncheckedUpdateInput.schema';
import { process_logsWhereUniqueInputObjectSchema as process_logsWhereUniqueInputObjectSchema } from './objects/process_logsWhereUniqueInput.schema';

export const process_logsUpdateOneSchema: z.ZodType<Prisma.process_logsUpdateArgs> = z.object({ select: process_logsSelectObjectSchema.optional(), include: process_logsIncludeObjectSchema.optional(), data: z.union([process_logsUpdateInputObjectSchema, process_logsUncheckedUpdateInputObjectSchema]), where: process_logsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.process_logsUpdateArgs>;

export const process_logsUpdateOneZodSchema = z.object({ select: process_logsSelectObjectSchema.optional(), include: process_logsIncludeObjectSchema.optional(), data: z.union([process_logsUpdateInputObjectSchema, process_logsUncheckedUpdateInputObjectSchema]), where: process_logsWhereUniqueInputObjectSchema }).strict();