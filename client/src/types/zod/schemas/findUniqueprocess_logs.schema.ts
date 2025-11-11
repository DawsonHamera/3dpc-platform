import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_logsSelectObjectSchema as process_logsSelectObjectSchema } from './objects/process_logsSelect.schema';
import { process_logsIncludeObjectSchema as process_logsIncludeObjectSchema } from './objects/process_logsInclude.schema';
import { process_logsWhereUniqueInputObjectSchema as process_logsWhereUniqueInputObjectSchema } from './objects/process_logsWhereUniqueInput.schema';

export const process_logsFindUniqueSchema: z.ZodType<Prisma.process_logsFindUniqueArgs> = z.object({ select: process_logsSelectObjectSchema.optional(), include: process_logsIncludeObjectSchema.optional(), where: process_logsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.process_logsFindUniqueArgs>;

export const process_logsFindUniqueZodSchema = z.object({ select: process_logsSelectObjectSchema.optional(), include: process_logsIncludeObjectSchema.optional(), where: process_logsWhereUniqueInputObjectSchema }).strict();