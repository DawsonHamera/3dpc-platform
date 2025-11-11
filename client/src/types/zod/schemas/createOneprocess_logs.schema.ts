import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_logsSelectObjectSchema as process_logsSelectObjectSchema } from './objects/process_logsSelect.schema';
import { process_logsIncludeObjectSchema as process_logsIncludeObjectSchema } from './objects/process_logsInclude.schema';
import { process_logsCreateInputObjectSchema as process_logsCreateInputObjectSchema } from './objects/process_logsCreateInput.schema';
import { process_logsUncheckedCreateInputObjectSchema as process_logsUncheckedCreateInputObjectSchema } from './objects/process_logsUncheckedCreateInput.schema';

export const process_logsCreateOneSchema: z.ZodType<Prisma.process_logsCreateArgs> = z.object({ select: process_logsSelectObjectSchema.optional(), include: process_logsIncludeObjectSchema.optional(), data: z.union([process_logsCreateInputObjectSchema, process_logsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.process_logsCreateArgs>;

export const process_logsCreateOneZodSchema = z.object({ select: process_logsSelectObjectSchema.optional(), include: process_logsIncludeObjectSchema.optional(), data: z.union([process_logsCreateInputObjectSchema, process_logsUncheckedCreateInputObjectSchema]) }).strict();