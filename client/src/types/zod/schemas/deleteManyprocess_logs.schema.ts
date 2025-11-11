import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_logsWhereInputObjectSchema as process_logsWhereInputObjectSchema } from './objects/process_logsWhereInput.schema';

export const process_logsDeleteManySchema: z.ZodType<Prisma.process_logsDeleteManyArgs> = z.object({ where: process_logsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.process_logsDeleteManyArgs>;

export const process_logsDeleteManyZodSchema = z.object({ where: process_logsWhereInputObjectSchema.optional() }).strict();